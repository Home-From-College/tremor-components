"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var r=require("../../../lib/sizing.cjs"),e=require("../../../lib/spacing.cjs"),o=require("../../../lib/font.cjs"),t=require("../../../lib/theme.cjs"),d=require("../../../lib/utils.cjs");require("../../../lib/tremorTwMerge.cjs");const a={xs:{height:r.sizing.md.height,width:r.sizing.md.width},sm:{height:r.sizing.lg.height,width:r.sizing.lg.width},md:{height:r.sizing.lg.height,width:r.sizing.lg.width},lg:{height:r.sizing.xl.height,width:r.sizing.xl.width},xl:{height:r.sizing.xl.height,width:r.sizing.xl.width}};exports.getButtonColors=(r,e)=>{switch(r){case"primary":return{textColor:e?d.getColorClassNames("white").textColor:"text-tremor-brand-inverted dark:text-dark-tremor-brand-inverted",hoverTextColor:e?d.getColorClassNames("white").textColor:"text-tremor-brand-inverted dark:text-dark-tremor-brand-inverted",bgColor:e?d.getColorClassNames(e,t.colorPalette.background).bgColor:"bg-tremor-brand dark:bg-dark-tremor-brand",hoverBgColor:e?d.getColorClassNames(e,t.colorPalette.darkBackground).hoverBgColor:"hover:bg-tremor-brand-emphasis dark:hover:bg-dark-tremor-brand-emphasis",borderColor:e?d.getColorClassNames(e,t.colorPalette.border).borderColor:"border-tremor-brand dark:border-dark-tremor-brand",hoverBorderColor:e?d.getColorClassNames(e,t.colorPalette.darkBorder).hoverBorderColor:"hover:border-tremor-brand-emphasis dark:hover:border-dark-tremor-brand-emphasis"};case"secondary":return{textColor:e?d.getColorClassNames(e,t.colorPalette.text).textColor:"text-tremor-brand dark:text-dark-tremor-brand",hoverTextColor:e?d.getColorClassNames(e,t.colorPalette.text).textColor:"hover:text-tremor-brand-emphasis dark:hover:text-dark-tremor-brand-emphasis",bgColor:d.getColorClassNames("transparent").bgColor,hoverBgColor:e?d.getColorClassNames(e,t.colorPalette.lightBackground).hoverBgColor:"hover:bg-tremor-brand-faint dark:hover:bg-dark-tremor-brand-faint",borderColor:e?d.getColorClassNames(e,t.colorPalette.border).borderColor:"border-tremor-brand dark:border-dark-tremor-brand"};case"light":return{textColor:e?d.getColorClassNames(e,t.colorPalette.text).textColor:"text-tremor-brand dark:text-dark-tremor-brand",hoverTextColor:e?d.getColorClassNames(e,t.colorPalette.darkText).hoverTextColor:"hover:text-tremor-brand-emphasis dark:hover:text-dark-tremor-brand-emphasis",bgColor:d.getColorClassNames("transparent").bgColor,borderColor:"",hoverBorderColor:""}}},exports.getButtonProportions=r=>"light"!==r?{xs:{paddingX:e.spacing.md.paddingX,paddingY:e.spacing.xs.paddingY,fontSize:o.fontSize.xs},sm:{paddingX:e.spacing.twoXl.paddingX,paddingY:e.spacing.sm.paddingY,fontSize:o.fontSize.sm},md:{paddingX:e.spacing.twoXl.paddingX,paddingY:e.spacing.sm.paddingY,fontSize:o.fontSize.md},lg:{paddingX:e.spacing.twoXl.paddingX,paddingY:e.spacing.md.paddingY,fontSize:o.fontSize.lg},xl:{paddingX:e.spacing.twoXl.paddingX,paddingY:e.spacing.lg.paddingY,fontSize:o.fontSize.xl}}:{xs:{paddingX:"",paddingY:"",fontSize:o.fontSize.xs},sm:{paddingX:"",paddingY:"",fontSize:o.fontSize.sm},md:{paddingX:"",paddingY:"",fontSize:o.fontSize.md},lg:{paddingX:"",paddingY:"",fontSize:o.fontSize.lg},xl:{paddingX:"",paddingY:"",fontSize:o.fontSize.xl}},exports.iconSizes=a;
