/*! For license information please see __federation_expose_Textarea.6bb24d2b.js.LICENSE.txt */
"use strict";(self.chunk_remoteDesignSystem=self.chunk_remoteDesignSystem||[]).push([["7798"],{88981:function(e,r){r.Z={helperText:"helperText-anzvNa"}},57962:function(e,r){r.Z={label:"label-zC20Px",required:"required-oQntt9"}},63261:function(e,r){r.Z={inputContainer:"inputContainer-_9NBJx",input:"input-mTETfN"}},75251:function(e,r,n){var t=n(25438),a=Symbol.for("react.element"),i=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,s=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function o(e,r,n){var t,i={},o=null,f=null;for(t in void 0!==n&&(o=""+n),void 0!==r.key&&(o=""+r.key),void 0!==r.ref&&(f=r.ref),r)l.call(r,t)&&!u.hasOwnProperty(t)&&(i[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===i[t]&&(i[t]=r[t]);return{$$typeof:a,type:e,key:o,ref:f,props:i,_owner:s.current}}r.Fragment=i,r.jsx=o,r.jsxs=o},85893:function(e,r,n){e.exports=n(75251)},39061:function(e,r,n){n.r(r);var t=n(85893),a=n(88981);r.default=e=>{var{helperID:r,helperText:n}=e;return(0,t.jsx)("span",{className:a.Z.helperText,id:r,children:n})}},70277:function(e,r,n){n.r(r);var t=n(85893),a=n(57962);r.default=e=>{var{inputID:r,label:n,required:i}=e;return(0,t.jsxs)("label",{className:a.Z.label,htmlFor:r,children:[n,i&&(0,t.jsx)("span",{className:a.Z.required,children:" *"})]})}},42949:function(e,r,n){n.r(r);var t=n(85893),a=n(39061),i=n(70277),l=n(13240),s=n(63261);r.default=e=>{var{disabled:r=!1,helperText:n="",label:u,name:o,required:f=!1}=e,d=(0,l.useId)(),c=(0,l.useId)();return(0,t.jsxs)("div",{className:s.Z.inputContainer,children:[(0,t.jsx)(i.default,{inputID:d,label:u,required:f}),(0,t.jsx)("textarea",{"aria-invalid":!1,"aria-describedby":c,className:s.Z.input,disabled:r,id:d,name:o,required:f}),(0,t.jsx)(a.default,{helperID:c,helperText:n})]})}}}]);