/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { svg } from 'lit';
import spread from '../../../globals/directives/spread';
const svgResultCarbonIcon = ({ children, ...attrs } = {}) =>
  svg`<svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" ...="${spread(
    attrs
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M10 13L11.4 11.6 15 15.2 15 2 17 2 17 15.2 20.6 11.6 22 13 16 19z"></path><path d="M20,2.8V5c3,1.5,5,4.5,5,8c0,2-0.6,3.8-1.8,5.4c0,0-0.2,0.3-0.3,0.4L16,26.9l-6.9-8.1c-0.1-0.1-0.3-0.4-0.3-0.4	C7.6,16.8,7,15,7,13c0-3.5,2-6.6,5-8V2.8C7.9,4.4,5,8.3,5,13c0,2.4,0.8,4.7,2.2,6.6c0,0,0.3,0.4,0.3,0.5L16,30l8.4-10	c0-0.1,0.3-0.4,0.3-0.4l0,0c1.4-1.9,2.2-4.2,2.2-6.6C27,8.3,24.1,4.4,20,2.8z"></path></svg>`;
export default svgResultCarbonIcon;
