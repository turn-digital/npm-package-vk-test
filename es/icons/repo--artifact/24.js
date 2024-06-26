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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M30,24v-2h-2.1c-0.1-0.6-0.4-1.2-0.7-1.8l1.5-1.5l-1.4-1.4l-1.5,1.5c-0.5-0.3-1.1-0.6-1.8-0.7V16h-2v2.1	c-0.6,0.1-1.2,0.4-1.8,0.7l-1.5-1.5l-1.4,1.4l1.5,1.5c-0.3,0.5-0.6,1.1-0.7,1.8H16v2h2.1c0.1,0.6,0.4,1.2,0.7,1.8l-1.5,1.5l1.4,1.4	l1.5-1.5c0.5,0.3,1.1,0.6,1.8,0.7V30h2v-2.1c0.6-0.1,1.2-0.4,1.8-0.7l1.5,1.5l1.4-1.4l-1.5-1.5c0.3-0.5,0.6-1.1,0.7-1.8H30z M23,26	c-1.7,0-3-1.3-3-3s1.3-3,3-3s3,1.3,3,3S24.7,26,23,26z"></path><path d="M28,8H16l-3.4-3.4C12.2,4.2,11.7,4,11.2,4H4C2.9,4,2,4.9,2,6v20c0,1.1,0.9,2,2,2h10v-2H4V6h7.2l3.4,3.4l0.6,0.6H28v5h2v-5	C30,8.9,29.1,8,28,8z"></path></svg>`;
export default svgResultCarbonIcon;
