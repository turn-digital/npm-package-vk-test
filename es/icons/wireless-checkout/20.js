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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M18,28V26A10,10,0,0,0,28,16h2A12,12,0,0,1,18,28Z"></path><path d="M18,23V21a5,5,0,0,0,5-5h2A7,7,0,0,1,18,23Z"></path><path d="M27,11H21V7a3,3,0,0,0-3-3H12A3,3,0,0,0,9,7v4H3a1,1,0,0,0-1,1.15L3.88,24.3a2,2,0,0,0,2,1.7H15V24H5.86L4.17,13H27ZM11,7a1,1,0,0,1,1-1h6a1,1,0,0,1,1,1v4H11Z"></path></svg>`;
export default svgResultCarbonIcon;
