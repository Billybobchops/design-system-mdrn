/*! For license information please see __federation_expose_CTAButton.b9169c62.js.LICENSE.txt */
"use strict";(self.chunk_remoteDesignSystem=self.chunk_remoteDesignSystem||[]).push([["2021"],{50405:function(e,n){n.Z={button:"button-yJmNvm",red:"red-TwP5Zn",green:"green-vDE2nI",blue:"blue-eMHrzP",disabled:"disabled-i9tCfZ",iconStart:"iconStart-hvtw44",iconEnd:"iconEnd-U9iHTB"}},75251:function(e,n,t){var r=t(25438),o=Symbol.for("react.element"),a=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,t){var r,a={},c=null,u=null;for(r in void 0!==t&&(c=""+t),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(u=n.ref),n)i.call(n,r)&&!s.hasOwnProperty(r)&&(a[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===a[r]&&(a[r]=n[r]);return{$$typeof:o,type:e,key:c,ref:u,props:a,_owner:l.current}}n.Fragment=a,n.jsx=c,n.jsxs=c},85893:function(e,n,t){e.exports=t(75251)},27021:function(e,n,t){t.r(n);var r=t(85893),o=t(13240),a=t.n(o),i=t(50405);n.default=e=>{var{clickHandler:n,disabled:t=!1,icon:o,iconPosition:l="end",text:s,type:c="button",variant:u="blue"}=e,d=t?"var(--utility-neutral-60)":"var(--utility-neutral-0)";return(0,r.jsxs)("button",{className:"".concat(i.Z.button," ").concat(u?i.Z[u]:""," ").concat(t?i.Z.disabled:""),disabled:t,onClick:n,type:c,children:[o&&"start"===l&&(0,r.jsx)("span",{"aria-hidden":"true",className:i.Z.iconStart,children:a().cloneElement(o,{fill:d})}),s,o&&"end"===l&&(0,r.jsx)("span",{"aria-hidden":"true",className:i.Z.iconEnd,children:a().cloneElement(o,{fill:d})})]})}}}]);