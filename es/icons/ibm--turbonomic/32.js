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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="m28.8,23.4c-1,2.3-6,4.6-12.8,4.6-7.7,0-13-2.9-13-5.5,0-2.1,3.6-4.5,9.1-5.2l-.3-2c-6.3.9-10.8,3.7-10.8,7.2,0,4.2,6.6,7.5,15,7.5,7.1,0,12.9-2.4,14.5-5.6l-1.7-1Z"></path><path d="m24.5,20.9c-1.2,1-4.2,2.1-8.5,2.1s-7.3-1.1-8.5-2.1l-1.8,1c1.7,2,6.1,3.1,10.2,3.1,4.2,0,8.5-1.1,10.2-3.1l-1.6-1Z"></path><circle cx="16" cy="16" r="2"></circle><path d="m16,7c-4.2,0-8.5,1.1-10.2,3.1l1.8,1c1.1-1,4.2-2.1,8.4-2.1s7.3,1.1,8.5,2.1l1.8-1c-1.8-2-6.1-3.1-10.3-3.1Z"></path><path d="m31,9.5c0-4.2-6.6-7.5-15-7.5C8.9,2,3.1,4.4,1.5,7.6l1.7,1c1-2.3,6-4.6,12.8-4.6,7.7,0,13,2.9,13,5.5,0,2.1-3.6,4.5-9.1,5.2l.3,2c6.3-.9,10.8-3.7,10.8-7.2Z"></path></svg>`;
export default svgResultCarbonIcon;
