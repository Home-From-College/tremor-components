'use client';
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("tslib"),t=require("react"),o=require("../../../lib/constants.cjs"),i=require("../../../lib/shape.cjs"),r=require("../../../lib/sizing.cjs"),n=require("../../../lib/spacing.cjs"),s=require("../../../lib/utils.cjs"),a=require("../../../lib/tremorTwMerge.cjs"),l=require("react-transition-group"),c=require("../../util-elements/Tooltip/Tooltip.cjs"),u=require("./styles.cjs"),d=require("../../../assets/LoadingSpinner.cjs");function g(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var m=g(t);const f=s.makeClassName("Button"),p=({loading:e,iconSize:t,iconPosition:i,Icon:s,transitionState:l})=>{const c=i===o.HorizontalPositions.Left?a.tremorTwMerge(n.spacing.twoXs.negativeMarginLeft,n.spacing.xs.marginRight):a.tremorTwMerge(n.spacing.twoXs.negativeMarginRight,n.spacing.xs.marginLeft),u=a.tremorTwMerge(r.sizing.none.width,r.sizing.none.height),g={default:u,entering:u,entered:t,exiting:t,exited:u};return e?m.default.createElement(d,{className:a.tremorTwMerge(f("icon"),"animate-spin shrink-0",c,g.default,g[l]),style:{transition:"width 150ms"}}):m.default.createElement(s,{className:a.tremorTwMerge(f("icon"),"shrink-0",t,c)})},h=m.default.forwardRef(((t,r)=>{const{icon:n,iconPosition:d=o.HorizontalPositions.Left,size:g=o.Sizes.SM,color:h,variant:w="primary",disabled:b,loading:T=!1,loadingText:x,children:z,className:M,tooltip:j}=t,P=e.__rest(t,["icon","iconPosition","size","color","variant","disabled","loading","loadingText","children","className","tooltip"]),S=n,q=T||b,v=void 0!==S||T,C=T&&x,B=a.tremorTwMerge(u.iconSizes[g].height,u.iconSizes[g].width),y="light"!==w?a.tremorTwMerge("rounded-tremor-default","shadow-tremor-input","dark:shadow-dark-tremor-input",i.border.sm.all):"",E=u.getButtonColors(w,h),N=u.getButtonProportions(w)[g],{tooltipProps:R,getReferenceProps:k}=c.useTooltip(300);return m.default.createElement(l.Transition,{in:T,timeout:50},(e=>m.default.createElement("button",Object.assign({ref:s.mergeRefs([r,R.refs.setReference]),className:a.tremorTwMerge(f("root"),"flex-shrink-0 inline-flex justify-center items-center group font-medium outline-none",y,N.paddingX,N.paddingY,N.fontSize,E.textColor,E.bgColor,E.borderColor,E.hoverBorderColor,q?"opacity-50":a.tremorTwMerge(u.getButtonColors(w,h).hoverTextColor,u.getButtonColors(w,h).hoverBgColor,u.getButtonColors(w,h).hoverBorderColor),M),disabled:q},k,P),m.default.createElement(c.default,Object.assign({text:j},R)),v&&d!==o.HorizontalPositions.Right?m.default.createElement(p,{loading:T,iconSize:B,iconPosition:d,Icon:S,transitionState:e}):null,m.default.createElement("span",{className:a.tremorTwMerge(f("text"),"text-sm whitespace-nowrap")},C?x:z),v&&d===o.HorizontalPositions.Right?m.default.createElement(p,{loading:T,iconSize:B,iconPosition:d,Icon:S,transitionState:e}):null)))}));h.displayName="Button",exports.ButtonIconOrSpinner=p,exports.default=h;
