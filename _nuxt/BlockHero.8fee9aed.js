import{a as p,o as s,b as o,e as r,f as c,p as n,N as y,c as l,w as _,Q as m,M as i,y as f,i as h,j as k}from"./entry.6a1c53a1.js";import $ from"./ButtonLink.35f4e724.js";import v from"./Terminal.7cf0ad38.js";import"./index.6bae1fd5.js";const w={class:"block-hero"},B={class:"layout"},N={class:"content"},g={key:0,class:"announce"},q={key:1,class:"title"},C={key:2,class:"description"},S={key:3,class:"extra"},V={class:"actions"},b=["href"],A={class:"support"},H=p({__name:"BlockHero",props:{cta:{type:Array,required:!1},secondary:{type:Array,required:!1},snippet:{type:String,required:!1},video:{type:Array,required:!1}},setup(t){return(e,T)=>{const a=h,u=$,d=v;return s(),o("section",w,[r("div",B,[r("div",N,[e.$slots.announce?(s(),o("p",g,[c(a,{use:e.$slots.announce,unwrap:"p"},null,8,["use"])])):n("",!0),e.$slots.title?(s(),o("h1",q,[c(a,{use:e.$slots.title,unwrap:"p"},null,8,["use"])])):n("",!0),e.$slots.description?(s(),o("p",C,[c(a,{use:e.$slots.description,unwrap:"p"},null,8,["use"])])):n("",!0),e.$slots.extra?(s(),o("div",S,[c(a,{use:e.$slots.extra,unwrap:"p"},null,8,["use"])])):n("",!0),r("div",V,[e.$slots.actions?(s(),l(a,{key:1,use:e.$slots.actions,unwrap:"p"},null,8,["use"])):(s(),o(y,{key:0},[t.cta?(s(),l(u,{key:0,class:"cta",bold:"",size:"large",href:t.cta[1]},{default:_(()=>[m(i(t.cta[0]),1)]),_:1},8,["href"])):n("",!0),t.secondary?(s(),o("a",{key:1,href:t.secondary[1],class:"secondary"},i(t.secondary[0]),9,b)):n("",!0)],64))])]),r("div",A,[f(e.$slots,"support",{},()=>[t.snippet?(s(),l(d,{key:0,content:t.snippet},null,8,["content"])):n("",!0)],!0)])])])}}}),F=k(H,[["__scopeId","data-v-ff365ae5"]]);export{F as default};
