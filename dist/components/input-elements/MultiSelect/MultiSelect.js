'use client';
import{__rest as e}from"tslib";import t,{useState as r,useMemo as a}from"react";import{border as o}from"../../../lib/shape.js";import{sizing as n}from"../../../lib/sizing.js";import{spacing as l}from"../../../lib/spacing.js";import{makeClassName as s}from"../../../lib/utils.js";import{tremorTwMerge as m}from"../../../lib/tremorTwMerge.js";import"../../../contexts/BaseColorContext.js";import"../../../contexts/IndexContext.js";import"../../../contexts/RootStylesContext.js";import d from"../../../contexts/SelectedValueContext.js";import i from"../../../hooks/useInternalState.js";import c from"../../../assets/ArrowDownHeadIcon.js";import u from"../../../assets/SearchIcon.js";import f from"../../../assets/XCircleIcon.js";import{getFilteredOptions as g,getSelectButtonColors as p}from"../selectUtils.js";import{Listbox as b}from"@headlessui/react";const h=s("MultiSelect"),k=t.forwardRef(((s,k)=>{const{defaultValue:x,value:w,onValueChange:v,onInputValueChange:j,placeholder:E="Select...",disabled:N=!1,icon:C,children:I,className:X}=s,V=e(s,["defaultValue","value","onValueChange","onInputValueChange","placeholder","disabled","icon","children","className"]),y=C,[S,R]=i(x,w),[L,M]=r(""),B=(null!=S?S:[]).length>0,D=a((()=>g(L,I)),[L,I]);return t.createElement(b,Object.assign({as:"div",ref:k,defaultValue:S,value:S,onChange:e=>{null==v||v(e),R(e)},disabled:N,className:m("w-full min-w-[10rem] relative text-tremor-default",X)},V,{multiple:!0}),(({value:e})=>t.createElement(t.Fragment,null,t.createElement(b.Button,{className:m("w-full outline-none text-left whitespace-nowrap truncate rounded-tremor-default focus:ring-2 transition duration-100","border-tremor-border shadow-tremor-input focus:border-tremor-brand-subtle focus:ring-tremor-brand-muted","dark:border-dark-tremor-border dark:shadow-dark-tremor-input dark:focus:border-dark-tremor-brand-subtle dark:focus:ring-dark-tremor-brand-muted",y?l.fourXl.paddingLeft:l.twoXl.paddingLeft,l.fourXl.paddingRight,l.sm.paddingY,o.sm.all,p(e.length>0,N))},y&&t.createElement("span",{className:m("absolute inset-y-0 left-0 flex items-center",l.md.paddingLeft)},t.createElement(y,{className:m(h("Icon"),"flex-none","text-tremor-content-subtle","dark:text-dark-tremor-content-subtle",n.lg.height,n.lg.width)})),e.length>0?`${e.length} selected`:E,t.createElement("span",{className:m("absolute inset-y-0 right-0 flex items-center",l.md.marginRight)},t.createElement(c,{className:m(h("arrowDownIcon"),"flex-none","text-tremor-content-subtle","dark:text-dark-tremor-content-subtle",n.md.height,n.md.width)}))),B&&!N?t.createElement("button",{className:m("absolute inset-y-0 right-0 flex items-center",l.fourXl.marginRight),onClick:e=>{e.preventDefault(),R([]),null==v||v([])}},t.createElement(f,{className:m(h("clearIcon"),"flex-none","text-tremor-content-subtle","dark:text-dark-tremor-content-subtle",n.md.height,n.md.width)})):null,t.createElement(b.Options,{className:m("absolute z-10 divide-y overflow-y-auto max-h-[228px] w-full left-0 outline-none rounded-tremor-default","bg-tremor-background border-tremor-border divide-tremor-border shadow-tremor-dropdown","dark:bg-dark-tremor-background dark:border-dark-tremor-border dark:divide-dark-tremor-border dark:shadow-dark-tremor-dropdown",l.twoXs.marginTop,l.twoXs.marginBottom,o.sm.all)},t.createElement("div",{className:m("flex items-center w-full","bg-tremor-background-muted","dark:bg-dark-tremor-background-muted",l.twoXl.paddingX)},t.createElement("span",null,t.createElement(u,{className:m("flex-none","text-tremor-content-subtle","dark:text-dark-tremor-content-subtle",l.threeXs.negativeMarginLeft,l.lg.marginRight,n.md.height,n.md.width)})),t.createElement("input",{name:"search",type:"input",placeholder:"Search",className:m("w-full focus:outline-none focus:ring-none bg-transparent text-tremor-default","text-tremor-content-emphasis","dark:text-dark-tremor-content-emphasis",l.sm.paddingY),onChange:e=>j?j(e.target.value):M(e.target.value)})),t.createElement(d.Provider,{value:{selectedValue:e}},D)))))}));k.displayName="MultiSelect";export{k as default};