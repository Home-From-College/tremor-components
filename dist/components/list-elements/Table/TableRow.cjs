"use strict";var e=require("tslib"),r=require("react"),t=require("../../../lib/utils.cjs"),a=require("../../../lib/tremorTwMerge.cjs");function l(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var s=l(r);const u=t.makeClassName("TableRow"),c=s.default.forwardRef(((r,t)=>{const{children:l,className:c}=r,i=e.__rest(r,["children","className"]);return s.default.createElement(s.default.Fragment,null,s.default.createElement("tr",Object.assign({ref:t,className:a.tremorTwMerge(u("row"),c)},i),l))}));c.displayName="TableRow",module.exports=c;