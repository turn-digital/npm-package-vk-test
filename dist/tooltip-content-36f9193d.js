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

import{_ as t,p as e}from"./settings-387c0fa4.js";import{_ as o,a as s}from"./get-d229c408.js";import{e as i}from"./custom-element-975be15f.js";import"./query-assigned-elements-8e88277c.js";import{a}from"./popover-content-da687335.js";import{s as n}from"./tooltip-8e7d87ab.js";t([i(`${e}-tooltip-content`)],(function(t,i){class a extends i{constructor(...e){super(...e),t(this)}}return{F:a,d:[{kind:"method",key:"connectedCallback",value:function(){this.hasAttribute("aria-hidden")||this.setAttribute("aria-hidden","true"),this.hasAttribute("role")||this.setAttribute("role","tooltip"),o(s(a.prototype),"connectedCallback",this).call(this)}},{kind:"method",key:"updated",value:function(){var t;null===(t=this.shadowRoot)||void 0===t||null===(t=t.querySelector(`.${e}--popover-content`))||void 0===t||t.classList.add(`${e}--tooltip-content`)}},{kind:"field",static:!0,key:"styles",value:()=>n}]}}),a);
