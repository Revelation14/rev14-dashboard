(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[965],{1634:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contributors",function(){return s(3748)}])},3748:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return B}});var r=s(5893),a=s(1163),i=s.n(a),n=s(7294),l=s(6501),o=s(4193),c=s(5290),d=s(6980),u=s(6154),m=s(7276),p=s(5702);async function h(e){try{let t=await m.Z.post("/user/create/contributor",e,{});return t.data.data}catch(e){if(u.Z.isAxiosError(e)){var t;let s=null===(t=e.response)||void 0===t?void 0:t.data;return s}return null}}async function x(){try{let e=await m.Z.get("/user/all/contributors",{});return e.data.data}catch(t){if(u.Z.isAxiosError(t)){var e;let s=null===(e=t.response)||void 0===e?void 0:e.data;return s}return null}}async function g(e){try{let t={status:p.ob.SUSPENDED},s=await m.Z.put("/user/update/contributor/".concat(e),t,{});return s.data.data}catch(e){if(u.Z.isAxiosError(e)){var t;let s=null===(t=e.response)||void 0===t?void 0:t.data;return s}}return null}async function f(e,t){try{let s=await m.Z.put("/user/update/contributor/".concat(e),t,{});return s.data.data}catch(e){if(u.Z.isAxiosError(e)){var s;let t=null===(s=e.response)||void 0===s?void 0:s.data;return t}return null}}var v=e=>{let{setShowAddSplitScreens:t}=e,[s,a]=n.useState({name:"",email:"",phoneNumber:"",gender:p.P2.MALE,password:"Password@123",role:p.uA.CONTENT_CREATOR}),[i,o]=(0,n.useState)(!1),u=async e=>{e.preventDefault();try{o(!0);let e=await h(s);(null==e?void 0:e.user)?(l.Am.success("Contributor created successfully"),t(!1)):400===e.statusCode?l.Am.error("Contributor already exists"):l.Am.error(e.message)}catch(e){l.Am.error("Error adding contributor")}a({name:"",email:"",phoneNumber:"",gender:p.P2.MALE,password:"Password@123",role:p.uA.CONTENT_CREATOR}),o(!1)};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"flex items-center justify-between",children:[(0,r.jsx)("div",{children:"Add Contributor"}),(0,r.jsx)("div",{className:"flex items-center gap-4",children:(0,r.jsx)("div",{className:"cursor-pointer rounded-full bg-gray-50 p-3",onClick:()=>t(!1),children:(0,r.jsx)("img",{src:"/assets/icons/black-close.svg",alt:"",className:"w-2"})})})]}),(0,r.jsxs)("form",{onSubmit:u,className:"flex flex-col gap-6 pt-11",children:[(0,r.jsx)(d.o,{type:"text",label:"Full Names",onChange:e=>{let{value:t}=e;return a({...s,name:t})}}),(0,r.jsx)(d.o,{type:"email",label:"Email",onChange:e=>{let{value:t}=e;return a({...s,email:t})}}),(0,r.jsx)(d.o,{type:"number",label:"Phone Number",onChange:e=>{let{value:t}=e;return a({...s,phoneNumber:t})}}),(0,r.jsxs)("div",{className:"flex flex-row gap-6",children:[(0,r.jsx)("span",{children:"Male"}),(0,r.jsx)("input",{type:"radio",value:"male",id:"male",checked:"male"===s.gender,onChange:e=>a({...s,gender:e.target.value})}),(0,r.jsx)("span",{children:"Female"}),(0,r.jsx)("input",{type:"radio",value:"female",id:"female",checked:"female"===s.gender,onChange:e=>a({...s,gender:e.target.value})})]}),(0,r.jsx)("div",{className:"mx-auto pt-9",children:(0,r.jsx)(c.Z,{text:"Add Contributor",type:"submit",backgroundColor:"gray-50",color:"gray-400",className:"hover:bg-gray-150",loading:i})})]})]})},b=s(506),y=s(2797),j=s(8486),S=s(8304),w=e=>{let{trigger:t,options:s,optionWidth:a="w-60"}=e,[i,l]=(0,n.useState)(!1),o=(0,n.useRef)(null);return(0,n.useEffect)(()=>{let e=e=>{o.current&&!o.current.contains(e.target)&&l(!1)};return window.addEventListener("click",e),()=>{window.removeEventListener("click",e)}},[]),(0,r.jsxs)("div",{className:"relative",ref:o,children:[(0,r.jsx)("div",{onClick:()=>{l(!i)},className:"cursor-pointer",children:t}),i&&(0,r.jsx)("div",{className:"absolute right-0 z-10 rounded-lg bg-white px-6 py-4 shadow-popover ".concat(a),children:s.map(e=>(0,r.jsx)("div",{onClick:e.action,className:"cursor-pointer px-4 py-2 hover:bg-gray-100",children:e.label},e.title))})]})},N=s(3449),C=s(4529);let E=(0,C.Ue)(e=>({user:{id:"",name:"",phoneNumber:"",email:"",role:p.uA.USER,profilePicture:"",gender:p.P2.MALE,status:p.ob.ACTIVE,contributions:0},updateUser:t=>{e({user:t})}}));var A=s(6067),k=s(1712),Z=s(7382);let P=e=>{let{className:t,children:s}=e;return(0,r.jsx)("th",{className:t,children:s})};var L=e=>{let{style:t,className:s,columns:a,data:i,rowsPerPage:l=6}=e,o=(0,k.Z)(e=>e.setCurrentPage);(0,n.useEffect)(()=>{let e=Math.ceil(i.length/l);o(1),k.Z.setState({totalPages:e})},[i,l,o]);let c=(0,k.Z)(e=>e.currentPage),d=(c-1)*l,u=d+l,m=i.slice(d,u);return(0,r.jsxs)("div",{children:[(0,r.jsxs)("table",{style:t,className:s,children:[(0,r.jsx)("colgroup",{children:a.map((e,t)=>(0,r.jsx)("col",{style:{width:"".concat(100/a.length,"%")}},t))}),(0,r.jsx)("thead",{className:"text-left text-gray-600",children:(0,r.jsx)("tr",{className:"border-b",children:a.map((e,t)=>(0,r.jsx)(P,{children:e},t))})}),(0,r.jsx)("tbody",{children:m.map((e,t)=>(0,r.jsx)("tr",{children:a.map((t,s)=>(0,r.jsx)("td",{children:e[s]},s))},t))})]}),(0,r.jsx)(Z.Z,{onPageChange:e=>{o(e)}})]})},O=s(2728),D=e=>{var t;let{users:s,showAddSplitScreens:a,setShowAddSplitScreens:i,setShowEditSplitScreens:l,setShowViewSplitScreens:o,setSelectedContributor:c,setShowSuspendConfirmation:d}=e,[u,m]=(0,n.useState)(""),p=s.filter(e=>{var t;return null===(t=e.name)||void 0===t?void 0:t.toLowerCase().includes(u.toLowerCase())}),h=E();return(0,r.jsx)(L,{className:"w-full",columns:[(0,r.jsx)("span",{className:"text-sm font-light",children:"Contributor"},"contributor"),(0,r.jsx)("span",{className:"text-sm font-light",children:"Role"},"role"),(0,r.jsx)("span",{className:"text-sm font-light",children:"Contributions"},"contributions"),(0,r.jsx)(O.Z,{className:"text-sm font-light",onSearch:e=>{m(e)},onClearSearch:()=>m("")},"search")],data:p.map(e=>{var s,n;return[(0,r.jsx)("div",{className:"mt-10",children:(0,r.jsxs)("div",{className:"flex items-center text-lg font-normal",children:[(0,r.jsx)("div",{className:"mr-2 hidden h-8 w-8 items-center justify-center rounded-full bg-backgroundAccent p-2 text-sm text-white md:flex",children:null===(s=e.name)||void 0===s?void 0:s.charAt(0)}),(0,r.jsx)("span",{className:"text-sm ".concat(a?"text-xs":"md:text-base"," ").concat(a?"text-ellipsis":""),style:a?{display:"-webkit-box",WebkitBoxOrient:"vertical",WebkitLineClamp:1,overflow:"hidden"}:{},children:e.name})]})},"contributor-".concat(e.name)),(0,r.jsx)("div",{className:"mt-10",children:(0,r.jsx)("div",{className:"h-fit w-fit rounded-3xl bg-purple px-3 text-xs font-light text-white ".concat(a?"text-xs":"md:text-sm"),children:(0,N.LF)(null!==(t=null===(n=e.role)||void 0===n?void 0:n.replaceAll("_"," "))&&void 0!==t?t:"")})},"role-".concat(e.name)),(0,r.jsx)("div",{className:"mt-10 cursor-pointer ".concat(a?"text-xs":"text-sm"),onClick:()=>{i(!1),l(!1),o(!0),c(e)},children:1===e.contributions?"1 contribution":"".concat(e.contributions," contributions")},"contributions-".concat(e.name)),(0,r.jsxs)("div",{className:"mt-10 flex items-center justify-end gap-6",children:[(0,r.jsx)(A.K,{label:"View",backgroundColor:"bg-gray-300",hoverBackgroundColor:"hover:bg-gray-50",color:"text-black",handleClick:()=>{i(!1),l(!1),o(!0),c(e)}}),(0,r.jsx)("div",{children:(0,r.jsx)(w,{trigger:(0,r.jsx)("img",{src:"/assets/icons/three-dots.svg",alt:""}),options:[{title:"Edit",label:(0,r.jsxs)("div",{className:"flex items-center gap-5",children:[(0,r.jsx)("img",{src:"/assets/icons/edit.svg",alt:"",className:""}),(0,r.jsx)("div",{children:"Edit"})]}),action:()=>{i(!1),o(!1),l(!0),h.updateUser(e)}},{title:"Remove Access",label:(0,r.jsxs)("div",{className:"flex items-center gap-5",children:[(0,r.jsx)("img",{src:"/assets/icons/black-close.svg",alt:"",className:"w-3"}),(0,r.jsx)("div",{children:"Remove Access"})]}),action:async()=>{d(!0),c(e)}}]})})]},"actions-".concat(e.name))]})})},_=e=>{let{showAddSplitScreens:t,setShowAddSplitScreens:s,setShowEditSplitScreens:a,setShowViewSplitScreens:i,setSelectedContributor:o,selectedContributor:d,isLoading:u,setLoading:m}=e,[h,f]=n.useState([]),[v,w]=n.useState([]),[N,C]=(0,n.useState)(!1),E=async()=>{try{m(!0);let e=await x(),t=null==e?void 0:e.filter(e=>e.status===p.ob.SUSPENDED);w(t);let s=null==e?void 0:e.filter(e=>e.status!==p.ob.SUSPENDED);null==s||s.sort((e,t)=>new Date(t.updatedAt).getTime()-new Date(e.updatedAt).getTime()),f(s)}catch(e){l.Am.error(null==e?void 0:e.message)}m(!1)};(0,n.useEffect)(()=>{E()},[]);let A=async()=>{if(m(!0),null==d?void 0:d.id){let e=await g(d.id);f([...h,e]),m(!1)}};return h?(0,r.jsxs)(r.Fragment,{children:[N&&(0,r.jsx)(y.Z,{title:"Confirm deletion",message:"Are you sure you want to suspend this user (contributor)?",onCancel:()=>C(!1),onConfirm:A,loading:u}),(0,r.jsxs)(b.m,{activeIndex:0,headerComponent:!t&&(0,r.jsx)(c.Z,{icon:"/assets/icons/person-add-sharp.svg",text:"Add contributors",className:"hover:bg-gold/75",handleClick:()=>{s(!0)}}),hasBorder:!1,children:[(0,r.jsx)(b.O,{label:"Active",children:u?(0,r.jsx)("div",{className:"flex h-screen w-full items-center justify-center",children:(0,r.jsx)(S.Z,{className:"h-5 w-5"})}):(null==h?void 0:h.length)===0?(0,r.jsx)(j.Z,{}):(0,r.jsx)(D,{users:h.sort((e,t)=>e.status.localeCompare(t.status)),showAddSplitScreens:t,setShowAddSplitScreens:s,setShowEditSplitScreens:a,setShowViewSplitScreens:i,setSelectedContributor:o,setShowSuspendConfirmation:C})}),(0,r.jsx)(b.O,{label:"Suspended",children:(null==v?void 0:v.length)===0?(0,r.jsx)(j.Z,{}):(0,r.jsx)(D,{users:v,showAddSplitScreens:t,setShowAddSplitScreens:s,setShowEditSplitScreens:a,setShowViewSplitScreens:i,setSelectedContributor:o,setShowSuspendConfirmation:C})})]})]}):(0,r.jsx)("div",{children:"Loading..."})},$=e=>{var t,s,a;let{contributor:i,setShowEditSplitScreens:o}=e,[u,m]=(0,n.useState)({name:i.name,email:i.email,role:i.role,gender:i.gender}),[p,h]=(0,n.useState)(!1),x=async e=>{h(!0),e.preventDefault();try{let e=await f(i.id,u);(null==e?void 0:e.id)?(l.Am.success("Contributor updated successfully"),o(!1)):l.Am.error(e.message)}catch(e){l.Am.error("Error updating contributor")}h(!1)};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"flex items-center justify-between",children:[(0,r.jsx)("div",{className:"text-lg font-medium",children:"Edit Contributor"}),(0,r.jsx)("div",{className:"flex items-center gap-4",children:(0,r.jsx)("div",{className:"cursor-pointer rounded-full bg-gray-50 p-3",onClick:()=>o(!1),children:(0,r.jsx)("img",{src:"/assets/icons/black-close.svg",alt:"",className:"w-2"})})})]}),(0,r.jsx)("div",{className:"flex flex-col items-center justify-center pt-11",children:(0,r.jsxs)("div",{className:"mb-8 h-20 w-20 rounded-full bg-backgroundAccent pt-3 text-center text-4xl text-white",children:[null===(t=i.name)||void 0===t?void 0:t.charAt(0),null===(s=i.name)||void 0===s?void 0:s.charAt(1)]})}),(0,r.jsx)("div",{className:"pb-2 font-medium text-gray-400",children:"Personal details"}),(0,r.jsxs)("form",{onSubmit:x,children:[(0,r.jsx)("div",{className:"rounded-xl bg-gray-50 p-6",children:(0,r.jsxs)("div",{className:"flex flex-col gap-6",children:[(0,r.jsx)(d.o,{label:"Name",background:"bg-gray-150",onChange:e=>{let{value:t}=e;return m({...u,name:t})},defaultValue:i.name||""}),(0,r.jsx)(d.o,{label:"email",background:"bg-gray-150",onChange:e=>{let{value:t}=e;return m({...u,email:t})},defaultValue:i.email||""}),(0,r.jsx)(d.o,{label:"Phone Number",background:"bg-gray-150",defaultValue:i.phoneNumber||""}),(0,r.jsxs)("div",{className:"flex flex-row gap-6 pt-11",children:[(0,r.jsx)("span",{children:"Male"}),(0,r.jsx)("input",{type:"radio",value:"male",id:"male",checked:"male"===u.gender,onChange:e=>m({...u,gender:e.target.value})}),(0,r.jsx)("span",{children:"Female"}),(0,r.jsx)("input",{type:"radio",value:"female",id:"female",checked:"female"===u.gender,onChange:e=>m({...u,gender:e.target.value})})]})]})}),(0,r.jsx)("div",{className:"pb-2 pt-8 font-medium text-gray-400",children:"Role"}),(0,r.jsx)("div",{className:"rounded-xl bg-gray-50 p-6",children:(0,r.jsx)("div",{className:"flex flex-col gap-6",children:(0,r.jsx)("p",{className:"bg-gray-150",children:null===(a=i.role)||void 0===a?void 0:a.replaceAll("_"," ")})})}),(0,r.jsx)("div",{className:"mx-auto px-24 pt-9 lg:px-56",children:(0,r.jsx)(c.Z,{text:"Save",type:"submit",backgroundColor:"gray-50",color:"gray-400",className:"hover:bg-gray-150",width:"w-full",loading:p})})]})]})},T=s(381),M=s.n(T),F=s(5327),I=s(9139),V=s(8917),R=s(9401),z=e=>{var t,s,i,o,c,d,u,m;let{contributor:p,setShowViewSplitScreens:h,rowsPerPage:x=6}=e,[g,f]=(0,n.useState)(""),[v,b]=(0,n.useState)(!1),[y,w]=(0,n.useState)([]),[C,E]=(0,n.useState)([]),A=(0,a.useRouter)(),P=(0,k.Z)(e=>e.setCurrentPage);(0,n.useEffect)(()=>{var e;let t=Math.ceil((null!==(e=null==y?void 0:y.length)&&void 0!==e?e:0)/x);P(1),k.Z.setState({totalPages:t})},[y,x,P]),(0,n.useEffect)(()=>{(null==p?void 0:p.id)&&(b(!0),(0,I.Qf)(p.id).then(e=>{w(e),E(e),b(!1)}).catch(e=>{l.Am.error(e),b(!1)}))},[null==p?void 0:p.id]);let L=e=>{(0,N.pj)("selectedDevotion",e),A.push("/devotionals")};return(0,r.jsxs)("div",{className:"flex flex-col gap-8",children:[(0,r.jsx)("div",{className:"flex flex-col justify-between md:flex-row md:items-center",children:(0,r.jsxs)("div",{className:"flex w-full items-center justify-between",children:[(0,r.jsx)("div",{className:"flex items-center gap-2",children:(0,r.jsxs)("div",{className:"flex items-center gap-4",children:[(0,r.jsxs)("span",{className:"h-8 w-8 rounded-full bg-backgroundAccent pt-1 text-center text-lg text-white",children:[null!==(d=null===(s=p.name)||void 0===s?void 0:null===(t=s.split(" ")[0])||void 0===t?void 0:t.charAt(0))&&void 0!==d?d:"",null!==(u=null===(o=p.name)||void 0===o?void 0:null===(i=o.split(" ")[1])||void 0===i?void 0:i.charAt(0))&&void 0!==u?u:""]}),(0,r.jsx)("span",{className:"text-lg font-medium text-black",children:p.name}),(0,r.jsx)(F.C,{title:(0,N.LF)(null!==(m=null===(c=p.role)||void 0===c?void 0:c.replaceAll("_"," "))&&void 0!==m?m:""),backgroundColor:"bg-purple"})]})}),(0,r.jsx)("div",{className:"flex items-center gap-4",children:(0,r.jsx)("div",{className:"cursor-pointer rounded-full bg-gray-50 p-3",onClick:()=>{h(!1)},children:(0,r.jsx)("img",{src:"/assets/icons/black-close.svg",alt:"",className:"w-2"})})})]})}),(0,r.jsx)("div",{className:"text-center text-xl font-medium",children:1===y.length?"1 Contribution":"".concat(y.length," Contributions")}),(0,r.jsx)(V.M,{name:"selectedDate",value:g,handleChange:e=>{(f(e.value.toString()),""===e.value.toString())?w(C):w(null==C?void 0:C.filter(t=>M()(t.updatedAt).isSame(e.value.toString(),"day")))}}),(0,r.jsx)("div",{className:"flex min-h-screen flex-col gap-4",children:v?(0,r.jsx)("div",{className:"my-4 flex items-center justify-center",children:(0,r.jsx)(S.Z,{className:"h-12 w-12"})}):0===y.length?(0,r.jsx)(j.Z,{}):y.map(e=>(0,r.jsx)(R.Z,{devotion:e,setShowViewSplitScreens:h,onClick:()=>L(e)},e.id))}),(0,r.jsx)(Z.Z,{onPageChange:e=>{P(e)}})]})},U=s(2215),H=s(4923),B=()=>{let[e,t]=(0,n.useState)(!1),[s,a]=(0,n.useState)(!1),[c,d]=(0,n.useState)(!1),[u,m]=(0,n.useState)(),[h,x]=(0,n.useState)(!1),g=E(),[f,b]=(0,n.useState)(!1),y=(0,H.a)(),j=JSON.parse((0,N.fp)("user"));return((0,n.useEffect)(()=>{b(!0),y.user||j||h?j&&j.role!==p.uA.SYSTEM_ADMIN&&(localStorage.clear(),i().push("/auth/login")):i().push("/auth/login")},[]),f)?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(U.Z,{children:e?(0,r.jsx)(o.Z,{firstIsLarger:!0,firstScreen:(0,r.jsx)(_,{isLoading:h,setLoading:x,showAddSplitScreens:e,setShowAddSplitScreens:t,setShowViewSplitScreens:d,setShowEditSplitScreens:a,setSelectedContributor:m,selectedContributor:u}),secondScreen:(0,r.jsx)(v,{setShowAddSplitScreens:t})}):c?(0,r.jsx)(o.Z,{secondIsLarger:!0,firstScreen:(0,r.jsx)(_,{isLoading:h,setLoading:x,showAddSplitScreens:c,setShowAddSplitScreens:t,setShowViewSplitScreens:d,setShowEditSplitScreens:a,setSelectedContributor:m,selectedContributor:u}),secondScreen:u?(0,r.jsx)(z,{setShowViewSplitScreens:d,contributor:u,rowsPerPage:2}):(0,r.jsx)("div",{})}):s?(0,r.jsx)(o.Z,{secondIsLarger:!0,firstScreen:(0,r.jsx)(_,{isLoading:h,setLoading:x,showAddSplitScreens:s,setShowAddSplitScreens:t,setShowViewSplitScreens:d,setShowEditSplitScreens:a,setSelectedContributor:m,selectedContributor:u}),secondScreen:(0,r.jsx)($,{setShowEditSplitScreens:a,contributor:g.user})}):(0,r.jsx)("div",{className:"min-h-screen rounded-2xl border border-gray-200 bg-white p-6",children:(0,r.jsx)(_,{isLoading:h,setLoading:x,showAddSplitScreens:e,setShowAddSplitScreens:t,setShowViewSplitScreens:d,setShowEditSplitScreens:a,setSelectedContributor:m,selectedContributor:u})})}),(0,r.jsx)(l.x7,{toastOptions:{duration:1500},position:"top-center"})]}):null}},6501:function(e,t,s){"use strict";let r,a;s.d(t,{x7:function(){return ea},Am:function(){return F}});var i,n=s(7294);let l={data:""},o=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||l,c=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,d=/\/\*[^]*?\*\/|  +/g,u=/\n+/g,m=(e,t)=>{let s="",r="",a="";for(let i in e){let n=e[i];"@"==i[0]?"i"==i[1]?s=i+" "+n+";":r+="f"==i[1]?m(n,i):i+"{"+m(n,"k"==i[1]?"":t)+"}":"object"==typeof n?r+=m(n,t?t.replace(/([^,])+/g,e=>i.replace(/(^:.*)|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):i):null!=n&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),a+=m.p?m.p(i,n):i+":"+n+";")}return s+(t&&a?t+"{"+a+"}":a)+r},p={},h=e=>{if("object"==typeof e){let t="";for(let s in e)t+=s+h(e[s]);return t}return e},x=(e,t,s,r,a)=>{var i;let n=h(e),l=p[n]||(p[n]=(e=>{let t=0,s=11;for(;t<e.length;)s=101*s+e.charCodeAt(t++)>>>0;return"go"+s})(n));if(!p[l]){let t=n!==e?e:(e=>{let t,s,r=[{}];for(;t=c.exec(e.replace(d,""));)t[4]?r.shift():t[3]?(s=t[3].replace(u," ").trim(),r.unshift(r[0][s]=r[0][s]||{})):r[0][t[1]]=t[2].replace(u," ").trim();return r[0]})(e);p[l]=m(a?{["@keyframes "+l]:t}:t,s?"":"."+l)}let o=s&&p.g?p.g:null;return s&&(p.g=p[l]),i=p[l],o?t.data=t.data.replace(o,i):-1===t.data.indexOf(i)&&(t.data=r?i+t.data:t.data+i),l},g=(e,t,s)=>e.reduce((e,r,a)=>{let i=t[a];if(i&&i.call){let e=i(s),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;i=t?"."+t:e&&"object"==typeof e?e.props?"":m(e,""):!1===e?"":e}return e+r+(null==i?"":i)},"");function f(e){let t=this||{},s=e.call?e(t.p):e;return x(s.unshift?s.raw?g(s,[].slice.call(arguments,1),t.p):s.reduce((e,s)=>Object.assign(e,s&&s.call?s(t.p):s),{}):s,o(t.target),t.g,t.o,t.k)}f.bind({g:1});let v,b,y,j=f.bind({k:1});function S(e,t){let s=this||{};return function(){let r=arguments;function a(i,n){let l=Object.assign({},i),o=l.className||a.className;s.p=Object.assign({theme:b&&b()},l),s.o=/ *go\d+/.test(o),l.className=f.apply(s,r)+(o?" "+o:""),t&&(l.ref=n);let c=e;return e[0]&&(c=l.as||e,delete l.as),y&&c[0]&&y(l),v(c,l)}return t?t(a):a}}var w=e=>"function"==typeof e,N=(e,t)=>w(e)?e(t):e,C=(r=0,()=>(++r).toString()),E=()=>{if(void 0===a&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");a=!e||e.matches}return a},A=new Map,k=e=>{if(A.has(e))return;let t=setTimeout(()=>{A.delete(e),D({type:4,toastId:e})},1e3);A.set(e,t)},Z=e=>{let t=A.get(e);t&&clearTimeout(t)},P=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return t.toast.id&&Z(t.toast.id),{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:s}=t;return e.toasts.find(e=>e.id===s.id)?P(e,{type:1,toast:s}):P(e,{type:0,toast:s});case 3:let{toastId:r}=t;return r?k(r):e.toasts.forEach(e=>{k(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===r||void 0===r?{...e,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let a=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+a}))}}},L=[],O={toasts:[],pausedAt:void 0},D=e=>{O=P(O,e),L.forEach(e=>{e(O)})},_={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},$=(e={})=>{let[t,s]=(0,n.useState)(O);(0,n.useEffect)(()=>(L.push(s),()=>{let e=L.indexOf(s);e>-1&&L.splice(e,1)}),[t]);let r=t.toasts.map(t=>{var s,r;return{...e,...e[t.type],...t,duration:t.duration||(null==(s=e[t.type])?void 0:s.duration)||(null==e?void 0:e.duration)||_[t.type],style:{...e.style,...null==(r=e[t.type])?void 0:r.style,...t.style}}});return{...t,toasts:r}},T=(e,t="blank",s)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...s,id:(null==s?void 0:s.id)||C()}),M=e=>(t,s)=>{let r=T(t,e,s);return D({type:2,toast:r}),r.id},F=(e,t)=>M("blank")(e,t);F.error=M("error"),F.success=M("success"),F.loading=M("loading"),F.custom=M("custom"),F.dismiss=e=>{D({type:3,toastId:e})},F.remove=e=>D({type:4,toastId:e}),F.promise=(e,t,s)=>{let r=F.loading(t.loading,{...s,...null==s?void 0:s.loading});return e.then(e=>(F.success(N(t.success,e),{id:r,...s,...null==s?void 0:s.success}),e)).catch(e=>{F.error(N(t.error,e),{id:r,...s,...null==s?void 0:s.error})}),e};var I=(e,t)=>{D({type:1,toast:{id:e,height:t}})},V=()=>{D({type:5,time:Date.now()})},R=e=>{let{toasts:t,pausedAt:s}=$(e);(0,n.useEffect)(()=>{if(s)return;let e=Date.now(),r=t.map(t=>{if(t.duration===1/0)return;let s=(t.duration||0)+t.pauseDuration-(e-t.createdAt);if(s<0){t.visible&&F.dismiss(t.id);return}return setTimeout(()=>F.dismiss(t.id),s)});return()=>{r.forEach(e=>e&&clearTimeout(e))}},[t,s]);let r=(0,n.useCallback)(()=>{s&&D({type:6,time:Date.now()})},[s]),a=(0,n.useCallback)((e,s)=>{let{reverseOrder:r=!1,gutter:a=8,defaultPosition:i}=s||{},n=t.filter(t=>(t.position||i)===(e.position||i)&&t.height),l=n.findIndex(t=>t.id===e.id),o=n.filter((e,t)=>t<l&&e.visible).length;return n.filter(e=>e.visible).slice(...r?[o+1]:[0,o]).reduce((e,t)=>e+(t.height||0)+a,0)},[t]);return{toasts:t,handlers:{updateHeight:I,startPause:V,endPause:r,calculateOffset:a}}},z=S("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${j`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${j`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${j`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,U=S("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${j`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`} 1s linear infinite;
`,H=S("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${j`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${j`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,B=S("div")`
  position: absolute;
`,W=S("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,X=S("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${j`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,Y=({toast:e})=>{let{icon:t,type:s,iconTheme:r}=e;return void 0!==t?"string"==typeof t?n.createElement(X,null,t):t:"blank"===s?null:n.createElement(W,null,n.createElement(U,{...r}),"loading"!==s&&n.createElement(B,null,"error"===s?n.createElement(z,{...r}):n.createElement(H,{...r})))},q=e=>`
0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,J=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}
`,K=S("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,Q=S("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,G=(e,t)=>{let s=e.includes("top")?1:-1,[r,a]=E()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[q(s),J(s)];return{animation:t?`${j(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${j(a)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},ee=n.memo(({toast:e,position:t,style:s,children:r})=>{let a=e.height?G(e.position||t||"top-center",e.visible):{opacity:0},i=n.createElement(Y,{toast:e}),l=n.createElement(Q,{...e.ariaProps},N(e.message,e));return n.createElement(K,{className:e.className,style:{...a,...s,...e.style}},"function"==typeof r?r({icon:i,message:l}):n.createElement(n.Fragment,null,i,l))});i=n.createElement,m.p=void 0,v=i,b=void 0,y=void 0;var et=({id:e,className:t,style:s,onHeightUpdate:r,children:a})=>{let i=n.useCallback(t=>{if(t){let s=()=>{r(e,t.getBoundingClientRect().height)};s(),new MutationObserver(s).observe(t,{subtree:!0,childList:!0,characterData:!0})}},[e,r]);return n.createElement("div",{ref:i,className:t,style:s},a)},es=(e,t)=>{let s=e.includes("top"),r=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:E()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(s?1:-1)}px)`,...s?{top:0}:{bottom:0},...r}},er=f`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,ea=({reverseOrder:e,position:t="top-center",toastOptions:s,gutter:r,children:a,containerStyle:i,containerClassName:l})=>{let{toasts:o,handlers:c}=R(s);return n.createElement("div",{style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...i},className:l,onMouseEnter:c.startPause,onMouseLeave:c.endPause},o.map(s=>{let i=s.position||t,l=es(i,c.calculateOffset(s,{reverseOrder:e,gutter:r,defaultPosition:t}));return n.createElement(et,{id:s.id,key:s.id,onHeightUpdate:c.updateHeight,className:s.visible?er:"",style:l},"custom"===s.type?N(s.message,s):a?a(s):n.createElement(ee,{toast:s,position:i}))}))}}},function(e){e.O(0,[885,827,76,55,774,888,179],function(){return e(e.s=1634)}),_N_E=e.O()}]);