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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M10 24H12V30H10z"></path><path d="M21,20H7a3.0033,3.0033,0,0,1-3-3V6H2V17a5.0059,5.0059,0,0,0,5,5H21a4.9419,4.9419,0,0,1,2.105.481L17,28.5859,18.4141,30l6.3071-6.3071A4.96,4.96,0,0,1,26,27v3h2V27A7.0078,7.0078,0,0,0,21,20Z"></path><path d="M25.2746,4.0386l-7-2a1.0013,1.0013,0,0,0-.55,0l-7,2A.9993.9993,0,0,0,10.03,5.2422L11,9.123V11A7,7,0,1,0,25,11V9.123l.97-3.8808A.9993.9993,0,0,0,25.2746,4.0386ZM18,4.04l5.7952,1.6558L23.219,8H19V6H17V8H12.781l-.5762-2.3042ZM18,16a5.0058,5.0058,0,0,1-5-5V10H23v1A5.0058,5.0058,0,0,1,18,16Z"></path></svg>`;
export default svgResultCarbonIcon;
