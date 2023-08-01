'use client';
"use strict";var e=require("tslib"),r=require("react"),t=require("../../../assets/XCircleIcon.cjs"),a=require("@headlessui/react"),o=require("date-fns"),d=require("../../../lib/shape.cjs"),l=require("../../../lib/sizing.cjs"),n=require("../../../lib/spacing.cjs"),s=require("../../../lib/tremorTwMerge.cjs"),u=require("../selectUtils.cjs"),i=require("./dateRangePickerUtils.cjs"),m=require("../Calendar/Calendar.cjs");require("../Select/Select.cjs");var c=require("../Select/SelectItem.cjs"),f=require("date-fns/locale"),b=require("../../../hooks/useInternalState.cjs");function g(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var p=g(r);const k=o.startOfToday(),w=p.default.forwardRef(((g,w)=>{var v,h;const{value:x,defaultValue:N,onValueChange:M,enableSelect:E=!0,minDate:S,maxDate:q,placeholder:T="Select",selectPlaceholder:j="Select",disabled:y=!1,locale:C=f.enUS,enableClear:D=!0,children:X,className:V,enableYearNavigation:O=!1}=g,P=e.__rest(g,["value","defaultValue","onValueChange","enableSelect","minDate","maxDate","placeholder","selectPlaceholder","disabled","locale","enableClear","children","className","enableYearNavigation"]),[B,R]=b(N,x),[_,z]=r.useState(!1),[L,Y]=r.useState(!1),I=r.useMemo((()=>{const e=[];return S&&e.push({before:S}),q&&e.push({after:q}),e}),[S,q]),F=r.useMemo((()=>{const e=new Map;return X?p.default.Children.forEach(X,(r=>{var t;e.set(r.props.value,{text:null!==(t=u.getNodeText(r))&&void 0!==t?t:r.props.value,from:r.props.from,to:r.props.to})})):i.defaultOptions.forEach((r=>{e.set(r.value,{text:r.text,from:r.from,to:k})})),e}),[X]),U=r.useMemo((()=>{if(X)return u.constructValueToNameMapping(X);const e=new Map;return i.defaultOptions.forEach((r=>e.set(r.value,r.text))),e}),[X]),A=null==B?void 0:B.selectValue,G=i.parseStartDate(null==B?void 0:B.from,S,A,F),H=i.parseEndDate(null==B?void 0:B.to,q,A,F),J=G||H?i.formatSelectedDates(G,H,C):T,K=o.startOfMonth(null!==(h=null!==(v=null!=H?H:G)&&void 0!==v?v:q)&&void 0!==h?h:k),Q=D&&!y;return p.default.createElement("div",Object.assign({ref:w,className:s.tremorTwMerge("w-full min-w-[10rem] relative flex justify-between text-tremor-default","max-w-sm",V)},P),p.default.createElement(a.Popover,{as:"div",className:s.tremorTwMerge("w-full overflow-hidden",E?"rounded-l-tremor-default":"rounded-tremor-default",_&&"ring-2 ring-tremor-brand-muted dark:focus:ring-dark-tremor-brand-muted")},p.default.createElement("div",{className:"relative w-full overflow-hidden"},p.default.createElement(a.Popover.Button,{onFocus:()=>z(!0),onBlur:()=>z(!1),disabled:y,className:s.tremorTwMerge("w-full outline-none text-left whitespace-nowrap truncate focus:ring-2 transition duration-100 rounded-l-tremor-default","rounded-l-tremor-default border-tremor-border shadow-tremor-input text-tremor-content-emphasis focus:border-tremor-brand-subtle","dark:border-dark-tremor-border dark:shadow-dark-tremor-input dark:text-dark-tremor-content-emphasis dark:focus:border-dark-tremor-brand-subtle",E?"rounded-l-tremor-default":"rounded-tremor-default",n.spacing.twoXl.paddingLeft,Q?n.spacing.fourXl.paddingRight:n.spacing.twoXl.paddingRight,n.spacing.sm.paddingY,d.border.sm.all,u.getSelectButtonColors(u.hasValue(G||H),y))},J),Q&&G?p.default.createElement("button",{className:s.tremorTwMerge("absolute outline-none inset-y-0 right-0 flex items-center transition duration-100",n.spacing.twoXl.marginRight),onClick:e=>{e.preventDefault(),null==M||M({}),R({})}},p.default.createElement(t,{className:s.tremorTwMerge(i.makeDateRangePickerClassName("clearIcon"),"flex-none","text-tremor-content-subtle","dark:text-dark-tremor-content-subtle",l.sizing.md.height,l.sizing.md.width)})):null),p.default.createElement(a.Popover.Panel,{className:s.tremorTwMerge("absolute z-10 divide-y overflow-y-auto min-w-min left-0 outline-none rounded-tremor-default p-3","bg-tremor-background border-tremor-border divide-tremor-border shadow-tremor-dropdown","dark:bg-dark-tremor-background dark:border-dark-tremor-border dark:divide-dark-tremor-border dark:shadow-dark-tremor-dropdown",n.spacing.twoXs.marginTop,n.spacing.twoXs.marginBottom,d.border.sm.all)},p.default.createElement(m,Object.assign({mode:"range",showOutsideDays:!0,defaultMonth:K,selected:{from:G,to:H},onSelect:e=>{null==M||M({from:null==e?void 0:e.from,to:null==e?void 0:e.to}),R({from:null==e?void 0:e.from,to:null==e?void 0:e.to})},locale:C,disabled:I,enableYearNavigation:O,classNames:{day_range_middle:s.tremorTwMerge("!rounded-none aria-selected:!bg-tremor-background-subtle aria-selected:dark:!bg-dark-tremor-background-subtle aria-selected:!text-tremor-content aria-selected:dark:!bg-dark-tremor-background-subtle"),day_range_start:"rounded-r-none rounded-l-tremor-small aria-selected:text-tremor-brand-inverted dark:aria-selected:text-dark-tremor-brand-inverted",day_range_end:"rounded-l-none rounded-r-tremor-small aria-selected:text-tremor-brand-inverted dark:aria-selected:text-dark-tremor-brand-inverted"}},g)))),E&&p.default.createElement(a.Listbox,{as:"div",className:s.tremorTwMerge("w-48 overflow-hidden -ml-px rounded-r-tremor-default",L&&"ring-2 ring-tremor-brand-muted dark:focus:ring-dark-tremor-brand-muted"),value:A,onChange:e=>{const{from:r,to:t}=F.get(e),a=null!=t?t:k;null==M||M({from:r,to:a,selectValue:e}),R({from:r,to:a,selectValue:e})},disabled:y},(({value:e})=>{var r;return p.default.createElement(p.default.Fragment,null,p.default.createElement(a.Listbox.Button,{onFocus:()=>Y(!0),onBlur:()=>Y(!1),className:s.tremorTwMerge("w-full outline-none text-left whitespace-nowrap truncate rounded-r-tremor-default transition duration-100","border-tremor-border shadow-tremor-input text-tremor-content-emphasis focus:border-tremor-brand-subtle","dark:border-dark-tremor-border dark:shadow-dark-tremor-input dark:text-dark-tremor-content-emphasis dark:focus:border-dark-tremor-brand-subtle",n.spacing.twoXl.paddingLeft,n.spacing.twoXl.paddingRight,n.spacing.sm.paddingY,d.border.sm.all,u.getSelectButtonColors(u.hasValue(e),y))},e&&null!==(r=U.get(e))&&void 0!==r?r:j),p.default.createElement(a.Listbox.Options,{className:s.tremorTwMerge("absolute z-10 divide-y overflow-y-auto w-full inset-x-0 right-0 outline-none","shadow-tremor-dropdown bg-tremor-background border-tremor-border divide-tremor-border rounded-tremor-default","dark:shadow-dark-tremor-dropdown dark:bg-dark-tremor-background dark:border-dark-tremor-border dark:divide-dark-tremor-border",n.spacing.twoXs.marginTop,n.spacing.twoXs.marginBottom,d.border.sm.all)},null!=X?X:i.defaultOptions.map((e=>p.default.createElement(c,{key:e.value,value:e.value},e.text)))))})))}));w.displayName="DateRangePicker",module.exports=w;
