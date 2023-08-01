'use client';
"use strict";var e=require("tslib"),t=require("react"),r=require("../../../lib/sizing.cjs"),l=require("../../../lib/spacing.cjs"),a=require("../../../lib/theme.cjs"),s=require("../../../lib/utils.cjs"),o=require("../../../lib/tremorTwMerge.cjs"),i=require("../../util-elements/Tooltip/Tooltip.cjs");function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var m=n(t);const c=s.makeClassName("CategoryBar"),u=({values:e})=>{const t=s.sumNumericArray(e);let a=0,i=0;return m.default.createElement("div",{className:o.tremorTwMerge(c("labels"),"relative flex w-full text-tremor-default","text-tremor-content","dark:text-dark-tremor-content",l.spacing.sm.marginBottom,r.sizing.lg.height)},e.slice(0,e.length).map(((e,r)=>{a+=e;const l=(e>=.1*t||i>=.09*t)&&t-a>=.15*t&&a>=.1*t;return i=l?0:i+=e,m.default.createElement("div",{key:`item-${r}`,className:"flex items-center justify-end",style:{width:`${e}%`}},m.default.createElement("span",{className:o.tremorTwMerge(l?"block":"hidden","left-1/2 translate-x-1/2")},a))})),m.default.createElement("div",{className:o.tremorTwMerge("absolute bottom-0 flex items-center",l.spacing.none.left)},"0"),m.default.createElement("div",{className:o.tremorTwMerge("absolute bottom-0 flex items-center",l.spacing.none.right)},t))},d=m.default.forwardRef(((t,l)=>{const{values:n=[],colors:d=a.themeColorRange,markerValue:f,showLabels:g=!0,tooltip:b,showAnimation:v=!0,className:h}=t,w=e.__rest(t,["values","colors","markerValue","showLabels","tooltip","showAnimation","className"]),p=((e,t,r)=>{if(void 0===e)return"";let l=0;for(let o=0;o<t.length;o++){const i=t[o],n=s.getColorClassNames(r[o],a.colorPalette.background).bgColor;if(l+=i,l>=e)return n}return""})(f,n,d),{tooltipProps:N,getReferenceProps:x}=i.useTooltip();return m.default.createElement(m.default.Fragment,null,m.default.createElement(i.default,Object.assign({text:b},N)),m.default.createElement("div",Object.assign({ref:l,className:o.tremorTwMerge(c("root"),h)},w),g?m.default.createElement(u,{values:n}):null,m.default.createElement("div",{className:o.tremorTwMerge(c("barWrapper"),"relative w-full flex items-center",r.sizing.xs.height)},m.default.createElement("div",{className:o.tremorTwMerge("flex-1 flex items-center h-full overflow-hidden rounded-tremor-full")},n.map(((e,t)=>{var r;const l=null!==(r=d[t])&&void 0!==r?r:"gray";return m.default.createElement("div",{key:`item-${t}`,className:o.tremorTwMerge(c("categoryBar"),"h-full",s.getColorClassNames(l,a.colorPalette.background).bgColor),style:{width:`${e}%`}})}))),void 0!==f?m.default.createElement("div",Object.assign({ref:N.refs.setReference,className:o.tremorTwMerge(c("markerWrapper"),"absolute right-1/2 -translate-x-1/2",r.sizing.lg.width),style:{left:`${f}%`,transition:v?"all 1s":""}},x),m.default.createElement("div",{className:o.tremorTwMerge(c("marker"),"ring-2 mx-auto rounded-tremor-full","ring-tremor-brand-inverted","dark:ring-dark-tremor-brand-inverted",p,r.sizing.md.height,r.sizing.twoXs.width)})):null)))}));d.displayName="CategoryBar",module.exports=d;
