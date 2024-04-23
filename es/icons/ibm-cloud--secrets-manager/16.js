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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M20,16c0-0.7-0.2-1.4-0.6-2l3.3-3.3l-1.4-1.4L18,12.6c-0.6-0.4-1.3-0.6-2-0.6c-0.7,0-1.4,0.2-2,0.6l-3.3-3.3l-1.4,1.4	l3.3,3.3c-0.4,0.6-0.6,1.3-0.6,2c0,0.7,0.2,1.4,0.6,2l-3.3,3.3l1.4,1.4l3.3-3.3c0.6,0.4,1.3,0.6,2,0.6c0.7,0,1.4-0.2,2-0.6l3.3,3.3	l1.4-1.4L19.4,18C19.8,17.4,20,16.7,20,16z M16,18c-1.1,0-2-0.9-2-2c0-1.1,0.9-2,2-2c1.1,0,2,0.9,2,2C18,17.1,17.1,18,16,18z"></path><path d="M26,17h6v-2h-2.1C29.4,7.7,23.4,2,16,2C8.3,2,2,8.3,2,16s6.3,14,14,14c5.2,0,9.7-2.8,12.1-7l-1.7-1c-2.1,3.6-5.9,6-10.4,6	C9.4,28,4,22.6,4,16C4,9.4,9.4,4,16,4c6.3,0,11.4,4.9,11.9,11H26V17z"></path></svg>`;
export default svgResultCarbonIcon;
