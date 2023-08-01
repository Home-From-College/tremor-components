import{__rest as e}from"tslib";import r from"react";import{border as t}from"../../../lib/shape.js";import{sizing as o}from"../../../lib/sizing.js";import{spacing as a}from"../../../lib/spacing.js";import{colorPalette as l}from"../../../lib/theme.js";import{getColorClassNames as i,makeClassName as m}from"../../../lib/utils.js";import{tremorTwMerge as s}from"../../../lib/tremorTwMerge.js";const d=m("Callout"),n=r.forwardRef(((m,n)=>{const{title:c,icon:f,color:b,className:g,children:p}=m,h=e(m,["title","icon","color","className","children"]),u=f;return r.createElement("div",Object.assign({ref:n,className:s(d("root"),"flex flex-col overflow-hidden rounded-tremor-default text-tremor-default",b?s(i(b,l.canvasBackground).bgColor,i(b,l.darkBorder).borderColor,i(b,l.darkText).textColor):s("bg-tremor-brand-faint border-tremor-brand-emphasis text-tremor-brand-emphasis","dark:bg-dark-tremor-brand-faint dark:border-dark-tremor-brand-emphasis dark:text-dark-tremor-brand-emphasis"),a.lg.paddingY,a.lg.paddingRight,a.twoXl.paddingLeft,t.lg.left,g)},h),r.createElement("div",{className:s(d("header"),"flex items-start")},u?r.createElement(u,{className:s(d("icon"),"flex-none",o.lg.height,o.lg.width,a.xs.marginRight)}):null,r.createElement("h4",{className:s(d("title"),"font-semibold")},c)),r.createElement("p",{className:s(d("body"),"overflow-y-auto",p?a.sm.marginTop:"")},p))}));n.displayName="Callout";export{n as default};