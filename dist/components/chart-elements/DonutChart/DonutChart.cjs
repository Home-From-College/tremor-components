'use client';
"use strict";var e=require("tslib"),t=require("react"),a=require("../../../lib/theme.cjs"),r=require("../../../lib/utils.cjs"),o=require("../../../lib/tremorTwMerge.cjs"),l=require("recharts"),n=require("../common/NoData.cjs"),i=require("./inputParser.cjs"),s=require("./DonutChartTooltip.cjs");function u(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var c=u(t);const m=c.default.forwardRef(((t,u)=>{const{data:m=[],category:d="value",index:f="name",colors:h=a.themeColorRange,variant:p="donut",valueFormatter:v=r.defaultValueFormatter,label:b,showLabel:w=!0,animationDuration:g=900,showAnimation:y=!0,showTooltip:D=!0,noDataText:T,className:k}=t,x=e.__rest(t,["data","category","index","colors","variant","valueFormatter","label","showLabel","animationDuration","showAnimation","showTooltip","noDataText","className"]),j="donut"==p,q=i.parseLabelInput(b,v,m,d);return c.default.createElement("div",Object.assign({ref:u,className:o.tremorTwMerge("w-full h-44",k)},x),c.default.createElement(l.ResponsiveContainer,{className:"h-full w-full"},(null==m?void 0:m.length)?c.default.createElement(l.PieChart,null,w&&j?c.default.createElement("text",{className:o.tremorTwMerge("fill-tremor-content-emphasis","dark:fill-dark-tremor-content-emphasis"),x:"50%",y:"50%",textAnchor:"middle",dominantBaseline:"middle"},q):null,c.default.createElement(l.Pie,{className:"stroke-tremor-background dark:stroke-dark-tremor-background",data:i.parseData(m,h),cx:"50%",cy:"50%",startAngle:90,endAngle:-270,innerRadius:j?"75%":"0%",outerRadius:"100%",stroke:"",strokeLinejoin:"round",dataKey:d,nameKey:f,isAnimationActive:y,animationDuration:g}),D?c.default.createElement(l.Tooltip,{wrapperStyle:{outline:"none"},content:({active:e,payload:t})=>c.default.createElement(s.DonutChartTooltip,{active:e,payload:t,valueFormatter:v})}):null):c.default.createElement(n,{noDataText:T})))}));m.displayName="DonutChart",module.exports=m;