/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
/**
 * @license
 * 
 * This bundle contains the following third-party dependencies:
 * 
 * flatpickr:
 * 
 flatpickr v4.6.1, @license MIT
 * 
 * lit-element:
 * 
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 * 
 * @carbon/motion:
 * 
 * Copyright IBM Corp. 2018, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 * 
 * lit-html:
 * 
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 * 
 * @carbon/colors:
 * 
 * Copyright IBM Corp. 2018, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 * 
 * @lit/reactive-element:
 * 
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 * 
 * @carbon/layout:
 * 
 * Copyright IBM Corp. 2018, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 * 
 * Also refer to the following links for the license of other third-party dependencies:
 * 
 * https://www.npmjs.com/package/lit
 * https://www.npmjs.com/package/@carbon/icons
 * https://www.npmjs.com/package/lodash-es
 */

import{_ as t,x as e,p as n}from"./settings-387c0fa4.js";import{o}from"./class-map-b1739c02.js";import{l as s}from"./if-defined-b99f5484.js";import{C as a,b as i}from"./button-5ca835b8.js";import{c as l}from"./carbon-element-4ca9803f.js";let r,d,c=t=>t;t([l(`${n}-button-skeleton`)],(function(t,a){return{F:class extends a{constructor(...e){super(...e),t(this)}},d:[{kind:"method",key:"_handleClickLinkSkeleton",value:function(t){this.disabled&&(t.preventDefault(),t.stopPropagation())}},{kind:"method",key:"render",value:function(){const{autofocus:t,disabled:a,download:i,href:l,hreflang:u,ping:f,rel:$,size:b,target:p,type:k}=this,m=o({[`${n}--btn`]:!0,[`${n}--skeleton`]:!0,[`${n}--btn--${b}`]:b});return l?e(r||(r=c`
          <a
            id="button"
            role="button"
            class="${0}"
            download="${0}"
            href="${0}"
            hreflang="${0}"
            ping="${0}"
            rel="${0}"
            target="${0}"
            type="${0}"
            @click="${0}"></a>
        `),m,s(i),s(l),s(u),s(f),s($),s(p),s(k),this._handleClickLinkSkeleton):e(d||(d=c`
          <button
            id="button"
            class="${0}"
            ?autofocus="${0}"
            ?disabled="${0}"
            type="${0}"></button>
        `),m,t,a,s(k))}},{kind:"field",static:!0,key:"styles",value:()=>i}]}}),a);
