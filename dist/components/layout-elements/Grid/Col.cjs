"use strict";var e=require("tslib"),r=require("react"),n=require("../../../lib/utils.cjs"),a=require("../../../lib/tremorTwMerge.cjs"),l=require("./styles.cjs");function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var o=t(r);const s=n.makeClassName("Col"),u=o.default.forwardRef(((r,n)=>{const{numColSpan:t=1,numColSpanSm:u,numColSpanMd:c,numColSpanLg:m,children:i,className:S}=r,p=e.__rest(r,["numColSpan","numColSpanSm","numColSpanMd","numColSpanLg","children","className"]),d=(e,r)=>e&&Object.keys(r).includes(String(e))?r[e]:"";return o.default.createElement("div",Object.assign({ref:n,className:a.tremorTwMerge(s("root"),(()=>{const e=d(t,l.colSpan),r=d(u,l.colSpanSm),n=d(c,l.colSpanMd),o=d(m,l.colSpanLg);return a.tremorTwMerge(e,r,n,o)})(),S)},p),i)}));u.displayName="Col",module.exports=u;