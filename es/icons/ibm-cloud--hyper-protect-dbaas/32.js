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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M24,30l-2.1-1c-1.7-0.8-2.9-2.6-2.9-4.5V18h10v6.5c0,1.9-1.1,3.7-2.9,4.5L24,30z M21,20v4.5c0,1.2,0.7,2.2,1.7,2.7l1.3,0.6	l1.3-0.6c1-0.5,1.7-1.6,1.7-2.7V20H21z"></path><circle cx="10" cy="23" r="1"></circle><circle cx="10" cy="15" r="1"></circle><circle cx="10" cy="7" r="1"></circle><path d="M23,2H7C5.9,2,5,2.9,5,4v22c0,1.1,0.9,2,2,2h9v-2H7v-6h9v-2H7v-6h16v3h2V4C25,2.9,24.1,2,23,2z M7,10V4h16v6H7z"></path></svg>`;
export default svgResultCarbonIcon;
