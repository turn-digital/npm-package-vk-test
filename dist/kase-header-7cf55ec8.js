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

import{i as e,b as t,_ as a,s as o,x as i,p as s}from"./settings-387c0fa4.js";import{_ as n,a as d}from"./get-d229c408.js";import"./index-d65bb778.js";import{c as r}from"./carbon-element-4ca9803f.js";import{s as c}from"./spread-6af5f657.js";import"./switcher-item-6b3585c8.js";import"./dropdown-item-f7d35f55.js";import"./dropdown-skeleton-a80fe89f.js";import"./avatar-30de9975.js";var p=e(["cds-header~cds-side-nav{height:calc(100% - 3rem);margin-top:3rem}.cds-ce-demo-devenv--container{transition:margin-left .11s cubic-bezier(.2,0,1,.9);will-change:margin-left}@media (min-width:66rem){.cds-ce-demo-devenv--container{margin-left:16rem}}.header-nav-menu-container{height:100%}.avatar_container{align-items:center;display:flex;padding:24px 12px}.popover{display:flex}.popover__button{height:48px;width:48px}.popover__button--icon{left:14px;position:absolute;top:12px}.popover__person{align-items:center;display:flex;padding:0 16px}.popover__person p{padding:0}.popover__person span{margin-left:16px}.popover__logout{position:absolute;right:16px}.page-content{align-items:center;background-color:red;border:0;box-sizing:border-box;display:flex;font-family:inherit;font-size:100%;left:256px;margin:0;padding:0;position:fixed;top:48px;vertical-align:baseline}@media screen and (max-width:1055px){.page-content{left:0}}:host(cds-header-menu-item:hover){background-color:red!important}"]);let l,h=e=>e;a([r(`${s}-kase-header`)],(function(e,a){class o extends a{constructor(){super(),e(this),this.handleEscapeKey=this.handleEscapeKey.bind(this)}}return{F:o,d:[{kind:"field",static:!0,key:"styles",value:()=>p},{kind:"method",key:"connectedCallback",value:function(){n(d(o.prototype),"connectedCallback",this).call(this),document.addEventListener("keydown",this.handleEscapeKey)}},{kind:"method",key:"disconnectedCallback",value:function(){n(d(o.prototype),"disconnectedCallback",this).call(this),document.removeEventListener("keydown",this.handleEscapeKey)}},{kind:"method",key:"handleEscapeKey",value:function(e){if("Escape"===e.key){this.shadowRoot.querySelectorAll("cds-popover[tabTip][open]").forEach((e=>e.removeAttribute("open")))}}},{kind:"method",key:"render",value:function(){const e=e=>{const t=this.shadowRoot.querySelector(e);(null==t?void 0:t.hasAttribute("open"))?null==t||t.removeAttribute("open"):null==t||t.setAttribute("open","")};return i(l||(l=h` <link rel="stylesheet" href="https://demo.turn.lv/kase/dist/assets/css/themes.css"> <div> <cds-header aria-label="IBM Platform Name" role="banner" class="cds-theme-zone-kase-header"> <cds-header-menu-button button-label-active="Close menu" button-label-inactive="Open menu"></cds-header-menu-button> <cds-header-name href="#">Valsts Kase</cds-header-name> <span class="header-nav-menu-container"><slot name="header-nav-content"></slot></span> <div class="cds--header__global"> <slot name="global-action"></slot> <div class="popover-tabtip-story cds-theme-zone-kase-header-popover popover"> <cds-popover tabTip id="popover-two" align="bottom-right"> <cds-button class="popover__button" aria-label="Iziet" tooltip-text="Iziet" tooltip-position="bottom" @click="${0}"> <span class="popover__button--icon" slot="icon">${0}</span> </cds-button> <cds-popover-content> <cds-item-padding-container vertical="03"> <div class="popover__person"> <p><slot name="user-name-right-panel"></slot></p> <span>${0}</span> </div> <cds-item-padding-container vertical="03"> <cds-switcher-item>Maini Data</cds-switcher-item> </cds-item-padding-container> <cds-switcher-divider></cds-switcher-divider> <cds-switcher-item>Iziet <span class="popover__logout">${0}</span></cds-switcher-item> </cds-item-padding-container></cds-popover-content> </cds-popover> </div> </div> </cds-header> <cds-side-nav aria-label="Side navigation" collapse-mode="" class="cds-theme-zone-kase-header-sidebar"> <cds-side-nav-items> <slot name="sidebar-mobile-nav-content"></slot> <slot name="sidebar-content"></slot> </cds-side-nav-items> </cds-side-nav> </div> `),(()=>e("#popover-two")),(({children:e,...a}={})=>t`<svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" ...="${c(a)}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${e}<path fill="none" d="M8.0071,24.93A4.9958,4.9958,0,0,1,13,20h6a4.9959,4.9959,0,0,1,4.9929,4.93,11.94,11.94,0,0,1-15.9858,0ZM20.5,12.5A4.5,4.5,0,1,1,16,8,4.5,4.5,0,0,1,20.5,12.5Z"></path><path d="M26.7489,24.93A13.9893,13.9893,0,1,0,2,16a13.899,13.899,0,0,0,3.2511,8.93l-.02.0166c.07.0845.15.1567.2222.2392.09.1036.1864.2.28.3008.28.3033.5674.5952.87.87.0915.0831.1864.1612.28.2417.32.2759.6484.5372.99.7813.0441.0312.0832.0693.1276.1006v-.0127a13.9011,13.9011,0,0,0,16,0V27.48c.0444-.0313.0835-.0694.1276-.1006.3412-.2441.67-.5054.99-.7813.0936-.08.1885-.1586.28-.2417.3025-.2749.59-.5668.87-.87.0933-.1006.1894-.1972.28-.3008.0719-.0825.1522-.1547.2222-.2392ZM16,8a4.5,4.5,0,1,1-4.5,4.5A4.5,4.5,0,0,1,16,8ZM8.0071,24.93A4.9957,4.9957,0,0,1,13,20h6a4.9958,4.9958,0,0,1,4.9929,4.93,11.94,11.94,0,0,1-15.9858,0Z"></path></svg>`)({fill:"white"}),(({children:e,...a}={})=>t`<svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" ...="${c(a)}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${e}<path fill="none" d="M8.0071,24.93A4.9958,4.9958,0,0,1,13,20h6a4.9959,4.9959,0,0,1,4.9929,4.93,11.94,11.94,0,0,1-15.9858,0ZM20.5,12.5A4.5,4.5,0,1,1,16,8,4.5,4.5,0,0,1,20.5,12.5Z"></path><path d="M26.7489,24.93A13.9893,13.9893,0,1,0,2,16a13.899,13.899,0,0,0,3.2511,8.93l-.02.0166c.07.0845.15.1567.2222.2392.09.1036.1864.2.28.3008.28.3033.5674.5952.87.87.0915.0831.1864.1612.28.2417.32.2759.6484.5372.99.7813.0441.0312.0832.0693.1276.1006v-.0127a13.9011,13.9011,0,0,0,16,0V27.48c.0444-.0313.0835-.0694.1276-.1006.3412-.2441.67-.5054.99-.7813.0936-.08.1885-.1586.28-.2417.3025-.2749.59-.5668.87-.87.0933-.1006.1894-.1972.28-.3008.0719-.0825.1522-.1547.2222-.2392ZM16,8a4.5,4.5,0,1,1-4.5,4.5A4.5,4.5,0,0,1,16,8ZM8.0071,24.93A4.9957,4.9957,0,0,1,13,20h6a4.9958,4.9958,0,0,1,4.9929,4.93,11.94,11.94,0,0,1-15.9858,0Z"></path></svg>`)(),(({children:e,...a}={})=>t`<svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" ...="${c(a)}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${e}<path d="M6,30H18a2.0023,2.0023,0,0,0,2-2V25H18v3H6V4H18V7h2V4a2.0023,2.0023,0,0,0-2-2H6A2.0023,2.0023,0,0,0,4,4V28A2.0023,2.0023,0,0,0,6,30Z"></path><path d="M20.586 20.586L24.172 17 10 17 10 15 24.172 15 20.586 11.414 22 10 28 16 22 22 20.586 20.586z"></path></svg>`)())}}]}}),o);
