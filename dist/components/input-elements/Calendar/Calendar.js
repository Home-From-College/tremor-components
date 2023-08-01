'use client';
import{__rest as e}from"tslib";import t from"react";import{DayPicker as r,useNavigation as o}from"react-day-picker";import a from"../../../assets/ArrowRightHeadIcon.js";import n from"../../../assets/ArrowLeftHeadIcon.js";import s from"../../../assets/DoubleArrowLeftHeadIcon.js";import c from"../../../assets/DoubleArrowRightHeadIcon.js";import{NavButton as m}from"./NavButton.js";import d from"../../text-elements/Text/Text.js";import{addYears as l,format as i}from"date-fns";function u(u){var{mode:b,defaultMonth:f,selected:k,onSelect:x,locale:p,disabled:h,enableYearNavigation:g,classNames:v}=u,y=e(u,["mode","defaultMonth","selected","onSelect","locale","disabled","enableYearNavigation","classNames"]);return t.createElement(r,Object.assign({showOutsideDays:!0,mode:b,defaultMonth:f,selected:k,onSelect:x,locale:p,disabled:h,classNames:Object.assign({months:"flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",month:"space-y-4",caption:"flex justify-center pt-2 relative items-center",caption_label:"text-tremor-default text-tremor-content-emphasis dark:text-dark-tremor-content-emphasis font-medium",nav:"space-x-1 flex items-center",nav_button:"flex items-center justify-center p-1 h-7 w-7 outline-none focus:ring-2 transition duration-100 border border-tremor-border dark:border-dark-tremor-border hover:bg-tremor-background-muted dark:hover:bg-dark-tremor-background-muted rounded-tremor-small focus:border-tremor-brand-subtle dark:focus:border-dark-tremor-brand-subtle focus:ring-tremor-brand-muted dark:focus:ring-dark-tremor-brand-muted text-tremor-content-subtle dark:text-dark-tremor-content-subtle hover:text-tremor-content dark:hover:text-dark-tremor-content",nav_button_previous:"absolute left-1",nav_button_next:"absolute right-1",table:"w-full border-collapse space-y-1",head_row:"flex",head_cell:"w-9 font-normal text-center text-tremor-content-subtle dark:text-dark-tremor-content-subtle",row:"flex w-full mt-0.5",cell:"text-center p-0 relative focus-within:relative text-tremor-default text-tremor-content-emphasis dark:text-dark-tremor-content-emphasis",day:"h-9 w-9 p-0 hover:bg-tremor-background-subtle dark:hover:bg-dark-tremor-background-subtle outline-tremor-brand dark:outline-dark-tremor-brand rounded-tremor-default",day_selected:"aria-selected:bg-tremor-background-emphasis aria-selected:text-tremor-content-inverted dark:aria-selected:bg-dark-tremor-background-emphasis dark:aria-selected:text-dark-tremor-content-inverted ",day_disabled:"text-tremor-content-subtle dark:text-dark-tremor-content-subtle disabled:hover:bg-transparent",day_outside:"text-tremor-content-subtle dark:text-dark-tremor-content-subtle"},v),components:{IconLeft:r=>{var o=e(r,[]);return t.createElement(n,Object.assign({className:"h-4 w-4"},o))},IconRight:r=>{var o=e(r,[]);return t.createElement(a,Object.assign({className:"h-4 w-4"},o))},Caption:r=>{var u=e(r,[]);const{goToMonth:b,nextMonth:f,previousMonth:k,currentMonth:x}=o();return t.createElement("div",{className:"flex justify-between items-center"},t.createElement("div",{className:"flex items-center space-x-1"},g&&t.createElement(m,{onClick:()=>x&&b(l(x,-1)),icon:s}),t.createElement(m,{onClick:()=>k&&b(k),icon:n})),t.createElement(d,{className:"text-tremor-default tabular-nums text-tremor-content-emphasis dark:text-dark-tremor-content-emphasis font-medium"},i(u.displayMonth,"LLLL yyy")),t.createElement("div",{className:"flex items-center space-x-1"},t.createElement(m,{onClick:()=>f&&b(f),icon:a}),g&&t.createElement(m,{onClick:()=>x&&b(l(x,1)),icon:c})))}}},y))}u.displayName="DateRangePicker";export{u as default};