import{__rest as m}from"tslib";import e,{useMemo as t}from"react";import{makeClassName as r}from"../../../lib/utils.js";import{tremorTwMerge as s}from"../../../lib/tremorTwMerge.js";import{gridCols as i,gridColsSm as n,gridColsMd as o,gridColsLg as a}from"./styles.js";const l=r("Grid"),c=(m,e)=>m&&Object.keys(e).includes(String(m))?e[m]:"",u=e.forwardRef(((r,u)=>{const{numItems:d=1,numItemsSm:f,numItemsMd:I,numItemsLg:p,children:g,className:b}=r,j=m(r,["numItems","numItemsSm","numItemsMd","numItemsLg","children","className"]),N=t((()=>{const m=c(d,i),e=c(f,n),t=c(I,o),r=c(p,a);return s(m,e,t,r)}),[d,f,I,p]);return e.createElement("div",Object.assign({ref:u,className:s(l("root"),"grid",N,b)},j),g)}));u.displayName="Grid";export{u as default};