'use client';
"use strict";var e=require("tslib"),r=require("react"),t=require("../../../lib/shape.cjs"),a=require("../../../lib/sizing.cjs"),o=require("../../../lib/spacing.cjs"),n=require("../../../lib/tremorTwMerge.cjs"),l=require("date-fns"),d=require("date-fns/locale"),s=require("../../../hooks/useInternalState.cjs"),i=require("../DateRangePicker/dateRangePickerUtils.cjs"),u=require("../../../assets/XCircleIcon.cjs"),c=require("@headlessui/react"),m=require("../selectUtils.cjs"),g=require("../Calendar/Calendar.cjs");function b(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var f=b(r);const p=l.startOfToday(),h=f.default.forwardRef(((b,h)=>{var k;const{value:w,defaultValue:v,onValueChange:q,minDate:j,maxDate:x,placeholder:N="Select",disabled:C=!1,locale:D=d.enUS,enableClear:M=!0,className:T,enableYearNavigation:y=!1}=b,P=e.__rest(b,["value","defaultValue","onValueChange","minDate","maxDate","placeholder","disabled","locale","enableClear","className","enableYearNavigation"]),[X,E]=s(v,w),R=r.useMemo((()=>{const e=[];return j&&e.push({before:j}),x&&e.push({after:x}),e}),[j,x]),S=X?i.formatSelectedDates(X,void 0,D):N,O=l.startOfMonth(null!==(k=null!=X?X:x)&&void 0!==k?k:p),V=M&&!C;return f.default.createElement(c.Popover,Object.assign({ref:h,as:"div",className:n.tremorTwMerge("relative w-full min-w-[10rem] text-tremor-default","focus:ring-2 focus:ring-tremor-brand-muted focus:dark:focus:ring-dark-tremor-brand-muted",T)},P),f.default.createElement(c.Popover.Button,{disabled:C,className:n.tremorTwMerge("w-full outline-none text-left whitespace-nowrap truncate focus:ring-2 transition duration-100 rounded-tremor-default","border-tremor-border shadow-tremor-input text-tremor-content-emphasis focus:border-tremor-brand-subtle","dark:border-dark-tremor-border dark:shadow-dark-tremor-input dark:text-dark-tremor-content-emphasis dark:focus:border-dark-tremor-brand-subtle",o.spacing.twoXl.paddingLeft,V?o.spacing.fourXl.paddingRight:o.spacing.twoXl.paddingRight,o.spacing.sm.paddingY,t.border.sm.all,m.getSelectButtonColors(m.hasValue(X),C))},S),V&&X?f.default.createElement("button",{className:n.tremorTwMerge("absolute outline-none inset-y-0 right-0 flex items-center transition duration-100",o.spacing.twoXl.marginRight),onClick:e=>{e.preventDefault(),null==q||q(void 0),E(void 0)}},f.default.createElement(u,{className:n.tremorTwMerge("flex-none","text-tremor-content-subtle","dark:text-dark-tremor-content-subtle",a.sizing.md.height,a.sizing.md.width)})):null,f.default.createElement(c.Popover.Panel,{className:n.tremorTwMerge("absolute z-10 divide-y overflow-y-auto min-w-min left-0 outline-none rounded-tremor-default p-3","bg-tremor-background border-tremor-border divide-tremor-border shadow-tremor-dropdown","dark:bg-dark-tremor-background dark:border-dark-tremor-border dark:divide-dark-tremor-border dark:shadow-dark-tremor-dropdown",o.spacing.twoXs.marginTop,o.spacing.twoXs.marginBottom,t.border.sm.all)},(({close:e})=>f.default.createElement(g,Object.assign({showOutsideDays:!0,mode:"single",defaultMonth:O,selected:X,onSelect:r=>{null==q||q(r),E(r),e()},locale:D,disabled:R,enableYearNavigation:y},b)))))}));h.displayName="DatePicker",module.exports=h;
