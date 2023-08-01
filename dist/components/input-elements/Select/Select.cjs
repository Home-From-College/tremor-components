'use client';
"use strict";var e=require("tslib"),r=require("../../../assets/ArrowDownHeadIcon.cjs"),t=require("react"),a=require("../../../assets/XCircleIcon.cjs"),l=require("../../../lib/shape.cjs"),o=require("../../../lib/sizing.cjs"),n=require("../../../lib/spacing.cjs"),s=require("../../../lib/utils.cjs"),d=require("../../../lib/tremorTwMerge.cjs"),i=require("../selectUtils.cjs"),u=require("@headlessui/react"),c=require("../../../hooks/useInternalState.cjs");function m(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var g=m(t);const b=s.makeClassName("Select"),f=g.default.forwardRef(((s,m)=>{const{defaultValue:f,value:p,onValueChange:w,placeholder:h="Select...",disabled:k=!1,icon:x,enableClear:v=!1,children:N,className:q}=s,M=e.__rest(s,["defaultValue","value","onValueChange","placeholder","disabled","icon","enableClear","children","className"]),[T,j]=c(f,p),E=x,C=t.useMemo((()=>i.constructValueToNameMapping(N)),[N]);return g.default.createElement(u.Listbox,Object.assign({as:"div",ref:m,defaultValue:T,value:T,onChange:e=>{null==w||w(e),j(e)},disabled:k,className:d.tremorTwMerge("w-full min-w-[10rem] relative text-tremor-default",q)},M),(({value:e})=>{var t;return g.default.createElement(g.default.Fragment,null,g.default.createElement(u.Listbox.Button,{className:d.tremorTwMerge("w-full outline-none text-left whitespace-nowrap truncate rounded-tremor-default focus:ring-2 transition duration-100","border-tremor-border shadow-tremor-input focus:border-tremor-brand-subtle focus:ring-tremor-brand-muted","dark:border-dark-tremor-border dark:shadow-dark-tremor-input dark:focus:border-dark-tremor-brand-subtle dark:focus:ring-dark-tremor-brand-muted",E?n.spacing.fourXl.paddingLeft:n.spacing.twoXl.paddingLeft,n.spacing.fourXl.paddingRight,n.spacing.sm.paddingY,l.border.sm.all,i.getSelectButtonColors(i.hasValue(e),k))},E&&g.default.createElement("span",{className:d.tremorTwMerge("absolute inset-y-0 left-0 flex items-center",n.spacing.md.paddingLeft)},g.default.createElement(E,{className:d.tremorTwMerge(b("Icon"),"flex-none","text-tremor-content-subtle","dark:text-dark-tremor-content-subtle",o.sizing.lg.height,o.sizing.lg.width)})),g.default.createElement("span",{className:"w-[90%] block truncate"},e&&null!==(t=C.get(e))&&void 0!==t?t:h),g.default.createElement("span",{className:d.tremorTwMerge("absolute inset-y-0 right-0 flex items-center",n.spacing.md.marginRight)},g.default.createElement(r,{className:d.tremorTwMerge(b("arrowDownIcon"),"flex-none","text-tremor-content-subtle","dark:text-dark-tremor-content-subtle",o.sizing.md.height,o.sizing.md.width)}))),v&&T?g.default.createElement("button",{className:d.tremorTwMerge("absolute inset-y-0 right-0 flex items-center",n.spacing.fourXl.marginRight),onClick:e=>{e.preventDefault(),j(""),null==w||w("")}},g.default.createElement(a,{className:d.tremorTwMerge(b("clearIcon"),"flex-none","text-tremor-content-subtle","dark:text-dark-tremor-content-subtle",o.sizing.md.height,o.sizing.md.width)})):null,g.default.createElement(u.Listbox.Options,{className:d.tremorTwMerge("absolute z-10 divide-y overflow-y-auto max-h-[228px] w-full left-0 outline-none rounded-tremor-default","bg-tremor-background border-tremor-border divide-tremor-border shadow-tremor-dropdown","dark:bg-dark-tremor-background dark:border-dark-tremor-border dark:divide-dark-tremor-border dark:shadow-dark-tremor-dropdown",n.spacing.twoXs.marginTop,n.spacing.twoXs.marginBottom,l.border.sm.all)},N))}))}));f.displayName="Select",module.exports=f;