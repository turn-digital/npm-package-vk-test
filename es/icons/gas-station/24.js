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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M8 10H15V12H8z"></path><path d="M28.4142,8l-5-5L22,4.4141l3,3V12a2.0023,2.0023,0,0,0,2,2V24.5a1.5,1.5,0,0,1-3,0V16a1,1,0,0,0-1-1H19V5a1,1,0,0,0-1-1H5A1,1,0,0,0,4,5V26H2v2H21V26H19V17h3v7.4a3.5644,3.5644,0,0,0,2.7654,3.5251A3.5062,3.5062,0,0,0,29,24.5V9.4144A2,2,0,0,0,28.4142,8ZM17,26H6V6H17Z"></path></svg>`;
export default svgResultCarbonIcon;
