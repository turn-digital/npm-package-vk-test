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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M24.5857,6.5859A1.9865,1.9865,0,0,0,23.1714,6H16V2H14V6H6A2.0025,2.0025,0,0,0,4,8v6a2.0025,2.0025,0,0,0,2,2h8V30h2V16h7.1714a1.9865,1.9865,0,0,0,1.4143-.5859L29,11ZM23.1714,14H6V8H23.1716l3,3Z"></path></svg>`;
export default svgResultCarbonIcon;
