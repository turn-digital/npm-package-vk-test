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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M23.5,9.2l-1,1.7c2.2,1.2,3.5,3.6,3.5,6.1c0,5.2-3.8,8.7-6,10.2V24h-1c-2.5,0-4.9-1.4-6.1-3.6l-1.7,1c1.4,2.6,4,4.2,6.9,4.6	V29c0,0.3,0.2,0.7,0.5,0.9C18.6,30,18.8,30,19,30c0.2,0,0.3,0,0.4-0.1C19.8,29.7,28,25.5,28,17C28,13.8,26.3,10.8,23.5,9.2z"></path><path d="M20,13.1V7.8c1.2-0.4,2-1.5,2-2.8c0-1.7-1.3-3-3-3s-3,1.3-3,3c0,1.3,0.8,2.4,2,2.8v5.3c-0.4,0.1-0.7,0.2-1,0.4l-5.3-5.3	C11.9,7.9,12,7.5,12,7c0-1.7-1.3-3-3-3S6,5.3,6,7s1.3,3,3,3c0.5,0,0.9-0.1,1.3-0.3l5.3,5.3c-0.2,0.3-0.3,0.7-0.4,1H9.8	c-0.4-1.2-1.5-2-2.8-2c-1.7,0-3,1.3-3,3s1.3,3,3,3c1.3,0,2.4-0.8,2.8-2h5.3c0.4,1.7,2,3,3.9,3c2.2,0,4-1.8,4-4	C23,15.1,21.7,13.6,20,13.1z M19,4c0.6,0,1,0.4,1,1s-0.4,1-1,1s-1-0.4-1-1S18.4,4,19,4z M9,8C8.4,8,8,7.6,8,7s0.4-1,1-1s1,0.4,1,1	S9.6,8,9,8z M7,18c-0.6,0-1-0.4-1-1s0.4-1,1-1s1,0.4,1,1S7.6,18,7,18z M19,19c-1.1,0-2-0.9-2-2s0.9-2,2-2s2,0.9,2,2S20.1,19,19,19z"></path></svg>`;
export default svgResultCarbonIcon;