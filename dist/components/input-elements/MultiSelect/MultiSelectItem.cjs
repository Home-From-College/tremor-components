'use client';
"use strict";var e=require("tslib"),t=require("react"),r=require("../../../lib/spacing.cjs"),a=require("../../../lib/utils.cjs"),c=require("../../../lib/tremorTwMerge.cjs");require("../../../contexts/BaseColorContext.cjs"),require("../../../contexts/IndexContext.cjs"),require("../../../contexts/RootStylesContext.cjs");var n=require("../../../contexts/SelectedValueContext.cjs"),s=require("@headlessui/react");function o(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var u=o(t);const i=a.makeClassName("MultiSelectItem"),d=u.default.forwardRef(((o,d)=>{const{value:l,className:m,children:g}=o,x=e.__rest(o,["value","className","children"]),{selectedValue:k}=t.useContext(n),b=a.isValueInArray(l,k);return u.default.createElement(s.Listbox.Option,Object.assign({className:c.tremorTwMerge(i("root"),"flex justify-start items-center cursor-default text-tremor-default","ui-active:bg-tremor-background-muted ui-active:text-tremor-content-strong ui-selected:text-tremor-content-strong ui-selected:bg-tremor-background-muted text-tremor-content-emphasis","dark:ui-active:bg-dark-tremor-background-muted dark:ui-active:text-dark-tremor-content-strong dark:ui-selected:text-dark-tremor-content-strong dark:ui-selected:bg-dark-tremor-background-muted dark:text-dark-tremor-content-emphasis",r.spacing.md.paddingX,r.spacing.md.paddingY,m),ref:d,key:l,value:l},x),u.default.createElement("input",{type:"checkbox",className:c.tremorTwMerge(i("checkbox"),"flex-none focus:ring-none focus:outline-none cursor-pointer","accent-tremor-brand","dark:accent-dark-tremor-brand",r.spacing.sm.marginRight),checked:b,readOnly:!0}),u.default.createElement("span",{className:"whitespace-nowrap truncate "},null!=g?g:l))}));d.displayName="MultiSelectItem",module.exports=d;