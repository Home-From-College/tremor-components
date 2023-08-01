'use client';
"use strict";var e=require("tslib"),r=require("react"),t=require("../../../lib/sizing.cjs"),a=require("../../../lib/spacing.cjs"),l=require("../../../lib/theme.cjs"),s=require("../../../lib/utils.cjs"),o=require("../../../lib/tremorTwMerge.cjs"),i=require("../../util-elements/Tooltip/Tooltip.cjs");function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var c=n(r);const m=s.makeClassName("ProgressBar"),u=c.default.forwardRef(((r,n)=>{const{value:u,label:d,color:f,tooltip:g,showAnimation:b=!0,className:p}=r,w=e.__rest(r,["value","label","color","tooltip","showAnimation","className"]),{tooltipProps:h,getReferenceProps:N}=i.useTooltip();return c.default.createElement(c.default.Fragment,null,c.default.createElement(i.default,Object.assign({text:g},h)),c.default.createElement("div",Object.assign({ref:n,className:o.tremorTwMerge(m("root"),"flex items-center w-full",p)},w),c.default.createElement("div",Object.assign({ref:h.refs.setReference,className:o.tremorTwMerge(m("progressBarWrapper"),"relative flex items-center w-full rounded-tremor-full",f?s.getColorClassNames(f,l.colorPalette.lightBackground).bgColor:"bg-tremor-brand-faint dark:bg-dark-tremor-brand-faint",t.sizing.xs.height)},N),c.default.createElement("div",{className:o.tremorTwMerge(m("progressBar"),"flex-col h-full rounded-tremor-full",f?s.getColorClassNames(f,l.colorPalette.background).bgColor:"bg-tremor-brand dark:bg-dark-tremor-brand"),style:{width:`${u}%`,transition:b?"all 1s":""}})),d?c.default.createElement("div",{className:o.tremorTwMerge(m("labelWrapper"),"w-16 truncate text-right","text-tremor-content-emphasis","dark:text-dark-tremor-content-emphasis",a.spacing.sm.marginLeft)},c.default.createElement("p",{className:o.tremorTwMerge(m("label"),"shrink-0 whitespace-nowrap truncate text-tremor-default")},d)):null))}));u.displayName="ProgressBar",module.exports=u;
