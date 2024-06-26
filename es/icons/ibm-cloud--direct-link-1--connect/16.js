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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M27,29H13c-1.1,0-2-0.9-2-2v-4h2v4h14V13h-4v-2h4c1.1,0,2,0.9,2,2v14C29,28.1,28.1,29,27,29z"></path><path d="M20,17c-0.5,0-0.9,0.1-1.3,0.3l-4-4c0.2-0.4,0.3-0.8,0.3-1.3c0-1.7-1.3-3-3-3s-3,1.3-3,3s1.3,3,3,3c0.5,0,0.9-0.1,1.3-0.3	l4,4C17.1,19.1,17,19.5,17,20c0,1.7,1.3,3,3,3s3-1.3,3-3S21.7,17,20,17z M11,12c0-0.6,0.4-1,1-1s1,0.4,1,1s-0.4,1-1,1S11,12.6,11,12	z M20,21c-0.6,0-1-0.4-1-1s0.4-1,1-1s1,0.4,1,1S20.6,21,20,21z"></path><path d="M5,3h14c1.1,0,2,0.9,2,2v4h-2V5H5v14h4v2H5c-1.1,0-2-0.9-2-2V5C3,3.9,3.9,3,5,3z"></path></svg>`;
export default svgResultCarbonIcon;
