import{a as m,a5 as f,r as y,o as s,b as C,e as r,f as h,w as b,u as t,c as i,a6 as w,h as B,q as k,G as x,H as I,j as v}from"./entry.6a1c53a1.js";import{u as S}from"./index.6bae1fd5.js";const z=o=>(x("data-v-b8fd7140"),o=o(),I(),o),T=z(()=>r("span",{class:"sr-only"},"Copy to clipboard",-1)),g={class:"icon-wrapper"},N=m({__name:"ProseCodeCopyButton",props:{content:{type:String,default:""},show:{type:Boolean,default:!1}},setup(o){const l=o,{copy:d}=S(),{prose:a}=f(),e=y("init"),u=_=>{d(l.content).then(()=>{e.value="copied",setTimeout(()=>{e.value="init"},1e3)}).catch(()=>{console.warn("Couldn't copy to clipboard!")})};return(_,V)=>{const n=k;return s(),C("button",{class:B([(o.show||t(e)==="copied")&&"show"]),onClick:u},[T,r("span",g,[h(w,{name:"fade"},{default:b(()=>{var c,p;return[t(e)==="copied"?(s(),i(n,{key:0,name:(c=t(a).copyButton)==null?void 0:c.iconCopied,size:"18",class:"copied"},null,8,["name"])):(s(),i(n,{key:1,name:(p=t(a).copyButton)==null?void 0:p.iconCopy,size:"18"},null,8,["name"]))]}),_:1})])],2)}}}),A=v(N,[["__scopeId","data-v-b8fd7140"]]);export{A as default};