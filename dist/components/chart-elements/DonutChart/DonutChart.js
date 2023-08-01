'use client';
import{__rest as e}from"tslib";import t from"react";import{themeColorRange as a}from"../../../lib/theme.js";import{defaultValueFormatter as o}from"../../../lib/utils.js";import{tremorTwMerge as r}from"../../../lib/tremorTwMerge.js";import{ResponsiveContainer as n,PieChart as l,Pie as i,Tooltip as m}from"recharts";import s from"../common/NoData.js";import{parseLabelInput as c,parseData as d}from"./inputParser.js";import{DonutChartTooltip as u}from"./DonutChartTooltip.js";const p=t.forwardRef(((p,f)=>{const{data:h=[],category:b="value",index:v="name",colors:w=a,variant:k="donut",valueFormatter:x=o,label:y,showLabel:g=!0,animationDuration:D=900,showAnimation:j=!0,showTooltip:E=!0,noDataText:N,className:A}=p,T=e(p,["data","category","index","colors","variant","valueFormatter","label","showLabel","animationDuration","showAnimation","showTooltip","noDataText","className"]),F="donut"==k,L=c(y,x,h,b);return t.createElement("div",Object.assign({ref:f,className:r("w-full h-44",A)},T),t.createElement(n,{className:"h-full w-full"},(null==h?void 0:h.length)?t.createElement(l,null,g&&F?t.createElement("text",{className:r("fill-tremor-content-emphasis","dark:fill-dark-tremor-content-emphasis"),x:"50%",y:"50%",textAnchor:"middle",dominantBaseline:"middle"},L):null,t.createElement(i,{className:"stroke-tremor-background dark:stroke-dark-tremor-background",data:d(h,w),cx:"50%",cy:"50%",startAngle:90,endAngle:-270,innerRadius:F?"75%":"0%",outerRadius:"100%",stroke:"",strokeLinejoin:"round",dataKey:b,nameKey:v,isAnimationActive:j,animationDuration:D}),E?t.createElement(m,{wrapperStyle:{outline:"none"},content:({active:e,payload:a})=>t.createElement(u,{active:e,payload:a,valueFormatter:x})}):null):t.createElement(s,{noDataText:N})))}));p.displayName="DonutChart";export{p as default};