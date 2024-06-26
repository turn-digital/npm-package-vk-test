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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M17,26c-3.6162,0-6.3328-2.2974-7.4456-6H19V18H9.1321A15.2782,15.2782,0,0,1,9,16c0-.33.01-.6641.0259-1H19V13H9.2371C9.8447,9.3525,11.81,6,17,6c3.8533,0,5.5315,1.6465,7.1282,4.4893l1.7436-.9786C24.2649,6.6484,22.0779,4,17,4,10.6448,4,7,8.374,7,16c0,7.0654,4.1121,12,10,12,5.0779,0,7.2649-2.6484,8.8718-5.5107l-1.7436-.9786C22.5315,24.3535,20.8533,26,17,26Z"></path></svg>`;
export default svgResultCarbonIcon;
