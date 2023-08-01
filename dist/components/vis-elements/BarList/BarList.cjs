"use strict";var e=require("tslib"),t=require("react"),r=require("../../../lib/sizing.cjs"),a=require("../../../lib/spacing.cjs"),l=require("../../../lib/theme.cjs"),n=require("../../../lib/utils.cjs"),m=require("../../../lib/tremorTwMerge.cjs");function o(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var s=o(t);const i=n.makeClassName("BarList"),c=s.default.forwardRef(((t,o)=>{const{data:c=[],color:u,valueFormatter:d=n.defaultValueFormatter,showAnimation:g=!0,className:f}=t,h=e.__rest(t,["data","color","valueFormatter","showAnimation","className"]),p=(e=>{let t=-1/0;return e.forEach((e=>{t=Math.max(t,e)})),e.map((e=>0===e?0:Math.max(e/t*100,1)))})(c.map((e=>e.value))),w=r.sizing.threeXl.height;return s.default.createElement("div",Object.assign({ref:o,className:m.tremorTwMerge(i("root"),"flex justify-between",a.spacing.threeXl.spaceX,f)},h),s.default.createElement("div",{className:m.tremorTwMerge(i("bars"),"relative w-full")},c.map(((e,t)=>{var o,d,f;const h=e.icon;return s.default.createElement("div",{key:null!==(o=e.key)&&void 0!==o?o:e.name,className:m.tremorTwMerge(i("bar"),"flex items-center rounded-tremor-small",w,e.color||u?n.getColorClassNames(null!==(d=e.color)&&void 0!==d?d:u,l.colorPalette.lightBackground).bgColor:"bg-tremor-brand-muted dark:bg-dark-tremor-brand-muted",t===c.length-1?a.spacing.none.marginBottom:a.spacing.sm.marginBottom),style:{width:`${p[t]}%`,transition:g?"all 1s":""}},s.default.createElement("div",{className:m.tremorTwMerge("absolute max-w-full flex",a.spacing.sm.left)},h?s.default.createElement(h,{className:m.tremorTwMerge(i("barIcon"),"flex-none","text-tremor-content","dark:text-dark-tremor-content",r.sizing.lg.height,r.sizing.lg.width,a.spacing.md.marginRight)}):null,e.href?s.default.createElement("a",{href:e.href,target:null!==(f=e.target)&&void 0!==f?f:"_blank",rel:"noreferrer",className:m.tremorTwMerge(i("barLink"),"whitespace-nowrap hover:underline truncate text-tremor-default","text-tremor-content-emphasis","dark:text-dark-tremor-content-emphasis")},e.name):s.default.createElement("p",{className:m.tremorTwMerge(i("barText"),"whitespace-nowrap truncate text-tremor-default","text-tremor-content-emphasis","dark:text-dark-tremor-content-emphasis")},e.name)))}))),s.default.createElement("div",{className:"text-right min-w-min"},c.map(((e,t)=>{var r;return s.default.createElement("div",{key:null!==(r=e.key)&&void 0!==r?r:e.name,className:m.tremorTwMerge(i("labelWrapper"),"flex justify-end items-center",w,t===c.length-1?a.spacing.none.marginBottom:a.spacing.sm.marginBottom)},s.default.createElement("p",{className:m.tremorTwMerge(i("labelText"),"whitespace-nowrap truncate text-tremor-default","text-tremor-content-emphasis","dark:text-dark-tremor-content-emphasis")},d(e.value)))}))))}));c.displayName="BarList",module.exports=c;