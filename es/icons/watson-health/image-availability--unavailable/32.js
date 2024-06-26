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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<circle cx="16" cy="20.5" r="1.5"></circle><path d="M17,17h-2v-4h2c1.1,0,2-0.9,2-2s-0.9-2-2-2h-2c-1.1,0-2,0.9-2,2v0.5h-2V11c0-2.2,1.8-4,4-4h2c2.2,0,4,1.8,4,4s-1.8,4-4,4V17	z"></path><path d="M16,30l-8.4-9.9c0-0.1-0.3-0.5-0.3-0.5C5.8,17.7,5,15.4,5,13C5,6.9,9.9,2,16,2s11,4.9,11,11c0,2.4-0.8,4.7-2.2,6.6l0,0	c0,0-0.3,0.4-0.3,0.4L16,30z M8.8,18.4c0,0,0.2,0.3,0.3,0.4l6.9,8.1l6.9-8.1c0-0.1,0.3-0.4,0.3-0.4C24.4,16.8,25,15,25,13	c0-5-4-9-9-9s-9,4-9,9C7,15,7.6,16.8,8.8,18.4L8.8,18.4z"></path></svg>`;
export default svgResultCarbonIcon;
