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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M30,10.68l-2-6A1,1,0,0,0,27,4H5a1,1,0,0,0-1,.68l-2,6A1.19,1.19,0,0,0,2,11v6a1,1,0,0,0,1,1H4V28H6V18h6V28H28V18h1a1,1,0,0,0,1-1V11A1.19,1.19,0,0,0,30,10.68ZM26,26H14V18H26Zm2-10H24V12H22v4H17V12H15v4H10V12H8v4H4V11.16L5.72,6H26.28L28,11.16Z"></path></svg>`;
export default svgResultCarbonIcon;
