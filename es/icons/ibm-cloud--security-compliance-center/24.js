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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M30,18v5.5c0,1.5-0.9,2.8-2.3,3.5L26,27.8	L24.3,27c-1.4-0.6-2.3-2-2.3-3.5V18H30 M32,16H20v7.5c0,2.2,1.3,4.3,3.4,5.3L26,30l2.6-1.2c2.1-1,3.4-3,3.4-5.3V16L32,16z"></path><path d="M16,25H7.5C3.4,25,0,21.6,0,17.5c0-3.7,2.7-6.7,6.2-7.4C7.1,5.4,11.2,2,16,2c5.5,0,10,4.5,10,10h-2c0-4.4-3.6-8-8-8	c-4.1,0-7.5,3.1-8,7.1L8,12L7.1,12C4.2,12.2,2,14.6,2,17.5c0,3,2.5,5.5,5.5,5.5H16V25z"></path></svg>`;
export default svgResultCarbonIcon;
