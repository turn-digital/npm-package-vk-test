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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M26,19c-0.7,0-1.4,0.3-1.9,0.7l-4.3-2.6c0.1-0.4,0.2-0.7,0.2-1.1c0-0.4-0.1-0.8-0.2-1.1l4.3-2.6c0.5,0.4,1.2,0.7,1.9,0.7	c1.7,0,3-1.3,3-3s-1.3-3-3-3s-3,1.3-3,3c0,0.2,0,0.4,0.1,0.6l-4.3,2.6C18.1,12.4,17.1,12,16,12c-0.6,0-1.1,0.1-1.6,0.4l-3.8-4.8	C10.8,7.1,11,6.6,11,6c0-1.7-1.3-3-3-3S5,4.3,5,6s1.3,3,3,3c0.3,0,0.7-0.1,1-0.2l3.8,4.8c-0.3,0.4-0.5,0.9-0.7,1.4H7.8	c-0.4-1.2-1.5-2-2.8-2c-1.7,0-3,1.3-3,3s1.3,3,3,3c1.3,0,2.4-0.8,2.8-2h4.3c0.1,0.5,0.4,1,0.7,1.4L9,23.2C8.7,23.1,8.3,23,8,23	c-1.7,0-3,1.3-3,3s1.3,3,3,3s3-1.3,3-3c0-0.6-0.2-1.1-0.5-1.6l3.8-4.8c0.5,0.2,1.1,0.4,1.6,0.4c1.1,0,2.1-0.4,2.8-1.2l4.3,2.6	c0,0.2-0.1,0.4-0.1,0.6c0,1.7,1.3,3,3,3s3-1.3,3-3S27.7,19,26,19z M26,9c0.6,0,1,0.4,1,1s-0.4,1-1,1s-1-0.4-1-1S25.4,9,26,9z M7,6	c0-0.6,0.4-1,1-1s1,0.4,1,1S8.6,7,8,7S7,6.6,7,6z M5,17c-0.6,0-1-0.4-1-1c0-0.6,0.4-1,1-1c0.6,0,1,0.4,1,1C6,16.6,5.6,17,5,17z M8,27c-0.6,0-1-0.4-1-1s0.4-1,1-1s1,0.4,1,1S8.6,27,8,27z M16,18c-1.1,0-2-0.9-2-2s0.9-2,2-2s2,0.9,2,2S17.1,18,16,18z M26,23	c-0.6,0-1-0.4-1-1s0.4-1,1-1s1,0.4,1,1S26.6,23,26,23z"></path></svg>`;
export default svgResultCarbonIcon;
