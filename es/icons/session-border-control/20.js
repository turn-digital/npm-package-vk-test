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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M26,8,24.59,9.41,27.17,12H16a5.967,5.967,0,0,0-4,1.54V6.83l2.59,2.58L16,8,11,3,6,8,7.41,9.41,10,6.83V18a5.969,5.969,0,0,0,1.54,4H4.83l2.58-2.59L6,18,1,23l5,5,1.41-1.41L4.83,24H16A5.99,5.99,0,0,0,20.46,14h6.71l-2.58,2.59L26,18l5-5ZM20,18a4,4,0,1,1-4-4A4.0045,4.0045,0,0,1,20,18Z"></path></svg>`;
export default svgResultCarbonIcon;
