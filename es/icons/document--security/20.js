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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M23,30l-2.1387-1.0127A5.0216,5.0216,0,0,1,18,24.4678V18H28v6.4678a5.0216,5.0216,0,0,1-2.8613,4.52ZM20,20v4.4678a3.012,3.012,0,0,0,1.7168,2.7109L23,27.7861l1.2832-.6074A3.012,3.012,0,0,0,26,24.4678V20Z"></path><path d="M16,28H6V4h8v6a2.0058,2.0058,0,0,0,2,2h6v3h2V10a.9092.9092,0,0,0-.3-.7l-7-7A.9087.9087,0,0,0,16,2H6A2.0058,2.0058,0,0,0,4,4V28a2.0058,2.0058,0,0,0,2,2H16ZM16,4.4,21.6,10H16Z"></path></svg>`;
export default svgResultCarbonIcon;
