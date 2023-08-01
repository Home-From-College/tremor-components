'use client';
import{__rest as e}from"tslib";import r,{useState as t,useMemo as o}from"react";import a from"../../../assets/XCircleIcon.js";import{Popover as d,Listbox as l}from"@headlessui/react";import{startOfToday as n,startOfMonth as m}from"date-fns";import{border as s}from"../../../lib/shape.js";import{sizing as i}from"../../../lib/sizing.js";import{spacing as u}from"../../../lib/spacing.js";import{tremorTwMerge as c}from"../../../lib/tremorTwMerge.js";import{getNodeText as b,constructValueToNameMapping as f,getSelectButtonColors as p,hasValue as g}from"../selectUtils.js";import{defaultOptions as k,parseStartDate as v,parseEndDate as w,formatSelectedDates as h,makeDateRangePickerClassName as x}from"./dateRangePickerUtils.js";import N from"../Calendar/Calendar.js";import"../Select/Select.js";import E from"../Select/SelectItem.js";import{enUS as j}from"date-fns/locale";import y from"../../../hooks/useInternalState.js";const X=n(),C=r.forwardRef(((n,C)=>{var S,D;const{value:R,defaultValue:V,onValueChange:B,enableSelect:_=!0,minDate:P,maxDate:Y,placeholder:I="Select",selectPlaceholder:M="Select",disabled:O=!1,locale:z=j,enableClear:F=!0,children:T,className:L,enableYearNavigation:U=!1}=n,q=e(n,["value","defaultValue","onValueChange","enableSelect","minDate","maxDate","placeholder","selectPlaceholder","disabled","locale","enableClear","children","className","enableYearNavigation"]),[A,G]=y(V,R),[H,J]=t(!1),[K,Q]=t(!1),W=o((()=>{const e=[];return P&&e.push({before:P}),Y&&e.push({after:Y}),e}),[P,Y]),Z=o((()=>{const e=new Map;return T?r.Children.forEach(T,(r=>{var t;e.set(r.props.value,{text:null!==(t=b(r))&&void 0!==t?t:r.props.value,from:r.props.from,to:r.props.to})})):k.forEach((r=>{e.set(r.value,{text:r.text,from:r.from,to:X})})),e}),[T]),$=o((()=>{if(T)return f(T);const e=new Map;return k.forEach((r=>e.set(r.value,r.text))),e}),[T]),ee=null==A?void 0:A.selectValue,re=v(null==A?void 0:A.from,P,ee,Z),te=w(null==A?void 0:A.to,Y,ee,Z),oe=re||te?h(re,te,z):I,ae=m(null!==(D=null!==(S=null!=te?te:re)&&void 0!==S?S:Y)&&void 0!==D?D:X),de=F&&!O;return r.createElement("div",Object.assign({ref:C,className:c("w-full min-w-[10rem] relative flex justify-between text-tremor-default","max-w-sm",L)},q),r.createElement(d,{as:"div",className:c("w-full overflow-hidden",_?"rounded-l-tremor-default":"rounded-tremor-default",H&&"ring-2 ring-tremor-brand-muted dark:focus:ring-dark-tremor-brand-muted")},r.createElement("div",{className:"relative w-full overflow-hidden"},r.createElement(d.Button,{onFocus:()=>J(!0),onBlur:()=>J(!1),disabled:O,className:c("w-full outline-none text-left whitespace-nowrap truncate focus:ring-2 transition duration-100 rounded-l-tremor-default","rounded-l-tremor-default border-tremor-border shadow-tremor-input text-tremor-content-emphasis focus:border-tremor-brand-subtle","dark:border-dark-tremor-border dark:shadow-dark-tremor-input dark:text-dark-tremor-content-emphasis dark:focus:border-dark-tremor-brand-subtle",_?"rounded-l-tremor-default":"rounded-tremor-default",u.twoXl.paddingLeft,de?u.fourXl.paddingRight:u.twoXl.paddingRight,u.sm.paddingY,s.sm.all,p(g(re||te),O))},oe),de&&re?r.createElement("button",{className:c("absolute outline-none inset-y-0 right-0 flex items-center transition duration-100",u.twoXl.marginRight),onClick:e=>{e.preventDefault(),null==B||B({}),G({})}},r.createElement(a,{className:c(x("clearIcon"),"flex-none","text-tremor-content-subtle","dark:text-dark-tremor-content-subtle",i.md.height,i.md.width)})):null),r.createElement(d.Panel,{className:c("absolute z-10 divide-y overflow-y-auto min-w-min left-0 outline-none rounded-tremor-default p-3","bg-tremor-background border-tremor-border divide-tremor-border shadow-tremor-dropdown","dark:bg-dark-tremor-background dark:border-dark-tremor-border dark:divide-dark-tremor-border dark:shadow-dark-tremor-dropdown",u.twoXs.marginTop,u.twoXs.marginBottom,s.sm.all)},r.createElement(N,Object.assign({mode:"range",showOutsideDays:!0,defaultMonth:ae,selected:{from:re,to:te},onSelect:e=>{null==B||B({from:null==e?void 0:e.from,to:null==e?void 0:e.to}),G({from:null==e?void 0:e.from,to:null==e?void 0:e.to})},locale:z,disabled:W,enableYearNavigation:U,classNames:{day_range_middle:c("!rounded-none aria-selected:!bg-tremor-background-subtle aria-selected:dark:!bg-dark-tremor-background-subtle aria-selected:!text-tremor-content aria-selected:dark:!bg-dark-tremor-background-subtle"),day_range_start:"rounded-r-none rounded-l-tremor-small aria-selected:text-tremor-brand-inverted dark:aria-selected:text-dark-tremor-brand-inverted",day_range_end:"rounded-l-none rounded-r-tremor-small aria-selected:text-tremor-brand-inverted dark:aria-selected:text-dark-tremor-brand-inverted"}},n)))),_&&r.createElement(l,{as:"div",className:c("w-48 overflow-hidden -ml-px rounded-r-tremor-default",K&&"ring-2 ring-tremor-brand-muted dark:focus:ring-dark-tremor-brand-muted"),value:ee,onChange:e=>{const{from:r,to:t}=Z.get(e),o=null!=t?t:X;null==B||B({from:r,to:o,selectValue:e}),G({from:r,to:o,selectValue:e})},disabled:O},(({value:e})=>{var t;return r.createElement(r.Fragment,null,r.createElement(l.Button,{onFocus:()=>Q(!0),onBlur:()=>Q(!1),className:c("w-full outline-none text-left whitespace-nowrap truncate rounded-r-tremor-default transition duration-100","border-tremor-border shadow-tremor-input text-tremor-content-emphasis focus:border-tremor-brand-subtle","dark:border-dark-tremor-border dark:shadow-dark-tremor-input dark:text-dark-tremor-content-emphasis dark:focus:border-dark-tremor-brand-subtle",u.twoXl.paddingLeft,u.twoXl.paddingRight,u.sm.paddingY,s.sm.all,p(g(e),O))},e&&null!==(t=$.get(e))&&void 0!==t?t:M),r.createElement(l.Options,{className:c("absolute z-10 divide-y overflow-y-auto w-full inset-x-0 right-0 outline-none","shadow-tremor-dropdown bg-tremor-background border-tremor-border divide-tremor-border rounded-tremor-default","dark:shadow-dark-tremor-dropdown dark:bg-dark-tremor-background dark:border-dark-tremor-border dark:divide-dark-tremor-border",u.twoXs.marginTop,u.twoXs.marginBottom,s.sm.all)},null!=T?T:k.map((e=>r.createElement(E,{key:e.value,value:e.value},e.text)))))})))}));C.displayName="DateRangePicker";export{C as default};
