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

import{i as e,_ as t,s as a,x as i,p as r}from"./settings-387c0fa4.js";import"./index-d65bb778.js";import{c as s}from"./carbon-element-4ca9803f.js";import{n}from"./query-assigned-elements-8e88277c.js";var o=e([".avatar{align-items:center;background-color:#e57201;border-radius:50%;color:#fff;display:flex;font-size:18px;font-weight:600;height:36px;justify-content:center;line-height:14px;width:36px}.container{position:relative}.avatar-text{color:#161616;font-size:var(--cds-heading-01-font-size,.875rem);font-weight:var(--cds-heading-01-font-weight,600);left:45px;letter-spacing:var(--cds-heading-01-letter-spacing,.16px);line-height:var(--cds-heading-01-line-height,1.42857);position:absolute;top:-3px}"]);let d,l,c=e=>e;t([s(`${r}-avatar`)],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[n({type:String})],key:"symbols",value:()=>"VK"},{kind:"field",decorators:[n({type:String})],key:"backgroundColor",value:()=>""},{kind:"field",decorators:[n({type:String})],key:"avatarText",value:()=>""},{kind:"field",static:!0,key:"styles",value:()=>o},{kind:"method",key:"render",value:function(){return i(d||(d=c` <div class="container"> <div class="avatar">${0}</div> ${0} </div>`),this.symbols,this.avatarText?i(l||(l=c`<p class="avatar-text">${0}</p>`),this.avatarText):"")}}]}}),a);
