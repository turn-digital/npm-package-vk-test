/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { svg } from 'lit';
import spread from '../../globals/directives/spread';
const svgResultCarbonIcon = ({ children, ...attrs } = {}) =>
  svg`<svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" ...="${spread(
    attrs
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="m15,22l-1.4099,1.4102,2.5798,2.5898H4V8h-2v18c0,1.1025.8972,2,2,2h12.1699l-2.5798,2.5898,1.4099,1.4102,5-5-5-5Z"></path><circle cx="11" cy="16" r="1"></circle><path d="m24,20H8c-1.1028,0-2-.8972-2-2v-4c0-1.1028.8972-2,2-2h16c1.1028,0,2,.8972,2,2v4c0,1.1028-.8972,2-2,2Zm-16-6v4h16v-4H8Z"></path><path d="m28,4h-12.1699l2.5801-2.5898L17,0l-5,5,5,5,1.4102-1.4102-2.5801-2.5898h12.1699v18h2V6c0-1.1025-.8972-2-2-2Z"></path></svg>`;
export default svgResultCarbonIcon;
