import{u as _}from"./index.6bae1fd5.js";import{a as u,r as h,o as c,b as n,u as a,p as i,e as o,M as m,G as v,H as y,j as f}from"./entry.6a1c53a1.js";const e=s=>(v("data-v-08041e41"),s=s(),y(),s),C={key:0,class:"copied"},k=e(()=>o("div",{class:"scrim"},null,-1)),S=e(()=>o("div",{class:"content"}," Copied! ",-1)),b=[k,S],w=e(()=>o("div",{class:"header"},[o("div",{class:"controls"},[o("div"),o("div"),o("div")]),o("div",{class:"title"}," Bash ")],-1)),x={class:"window"},B=e(()=>o("span",{class:"sign"},"$",-1)),I={class:"content"},g={key:1,class:"prompt"},T=u({__name:"Terminal",props:{content:{type:String,required:!0}},setup(s){const d=s,{copy:p}=_(),t=h("init"),r=l=>{p(d.content).then(()=>{t.value="copied",setTimeout(()=>{t.value="init"},1e3)}).catch(()=>{console.warn("Couldn't copy to clipboard!")})};return(l,N)=>(c(),n("div",{class:"terminal",onClick:r},[a(t)==="copied"?(c(),n("div",C,b)):i("",!0),w,o("div",x,[B,o("span",I,m(s.content),1)]),a(t)!=="copied"?(c(),n("div",g," Click to copy ")):i("",!0)]))}}),q=f(T,[["__scopeId","data-v-08041e41"]]);export{q as default};