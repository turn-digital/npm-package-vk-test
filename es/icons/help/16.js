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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 16 16">${children}<path d="M8,1C4.1,1,1,4.1,1,8s3.1,7,7,7s7-3.1,7-7S11.9,1,8,1z M8,14c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S11.3,14,8,14z"></path><circle cx="8" cy="11.8" r=".8"></circle><path d="M8.5,4H7.8C6.5,4,5.5,5,5.5,6.2c0,0,0,0,0,0v0.2h1V6.2C6.5,5.6,7.1,5,7.8,5h0.8c0.7,0,1.2,0.6,1.2,1.2S9.2,7.5,8.5,7.5h-1	v2.2h1V8.5c1.2,0,2.2-1,2.2-2.2S9.7,4,8.5,4z"></path></svg>`;
export default svgResultCarbonIcon;
