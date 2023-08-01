import{sizing as r}from"../../../lib/sizing.js";import{spacing as d}from"../../../lib/spacing.js";import{fontSize as o}from"../../../lib/font.js";import{colorPalette as e}from"../../../lib/theme.js";import{getColorClassNames as t}from"../../../lib/utils.js";import"../../../lib/tremorTwMerge.js";const a={xs:{height:r.md.height,width:r.md.width},sm:{height:r.lg.height,width:r.lg.width},md:{height:r.lg.height,width:r.lg.width},lg:{height:r.xl.height,width:r.xl.width},xl:{height:r.xl.height,width:r.xl.width}},i=r=>"light"!==r?{xs:{paddingX:d.md.paddingX,paddingY:d.xs.paddingY,fontSize:o.xs},sm:{paddingX:d.twoXl.paddingX,paddingY:d.sm.paddingY,fontSize:o.sm},md:{paddingX:d.twoXl.paddingX,paddingY:d.sm.paddingY,fontSize:o.md},lg:{paddingX:d.twoXl.paddingX,paddingY:d.md.paddingY,fontSize:o.lg},xl:{paddingX:d.twoXl.paddingX,paddingY:d.lg.paddingY,fontSize:o.xl}}:{xs:{paddingX:"",paddingY:"",fontSize:o.xs},sm:{paddingX:"",paddingY:"",fontSize:o.sm},md:{paddingX:"",paddingY:"",fontSize:o.md},lg:{paddingX:"",paddingY:"",fontSize:o.lg},xl:{paddingX:"",paddingY:"",fontSize:o.xl}},n=(r,d)=>{switch(r){case"primary":return{textColor:d?t("white").textColor:"text-tremor-brand-inverted dark:text-dark-tremor-brand-inverted",hoverTextColor:d?t("white").textColor:"text-tremor-brand-inverted dark:text-dark-tremor-brand-inverted",bgColor:d?t(d,e.background).bgColor:"bg-tremor-brand dark:bg-dark-tremor-brand",hoverBgColor:d?t(d,e.darkBackground).hoverBgColor:"hover:bg-tremor-brand-emphasis dark:hover:bg-dark-tremor-brand-emphasis",borderColor:d?t(d,e.border).borderColor:"border-tremor-brand dark:border-dark-tremor-brand",hoverBorderColor:d?t(d,e.darkBorder).hoverBorderColor:"hover:border-tremor-brand-emphasis dark:hover:border-dark-tremor-brand-emphasis"};case"secondary":return{textColor:d?t(d,e.text).textColor:"text-tremor-brand dark:text-dark-tremor-brand",hoverTextColor:d?t(d,e.text).textColor:"hover:text-tremor-brand-emphasis dark:hover:text-dark-tremor-brand-emphasis",bgColor:t("transparent").bgColor,hoverBgColor:d?t(d,e.lightBackground).hoverBgColor:"hover:bg-tremor-brand-faint dark:hover:bg-dark-tremor-brand-faint",borderColor:d?t(d,e.border).borderColor:"border-tremor-brand dark:border-dark-tremor-brand"};case"light":return{textColor:d?t(d,e.text).textColor:"text-tremor-brand dark:text-dark-tremor-brand",hoverTextColor:d?t(d,e.darkText).hoverTextColor:"hover:text-tremor-brand-emphasis dark:hover:text-dark-tremor-brand-emphasis",bgColor:t("transparent").bgColor,borderColor:"",hoverBorderColor:""}}};export{n as getButtonColors,i as getButtonProportions,a as iconSizes};