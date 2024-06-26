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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M4 26H6V28H4zM6 28H8V30H6zM8 30H10V32H8zM8 26H10V28H8zM4 30H6V32H4zM8 18H10V20H8zM10 20H12V22H10zM12 22H14V24H12zM12 18H14V20H12zM8 22H10V24H8zM18 18H20V20H18zM20 20H22V22H20zM22 22H24V24H22zM22 18H24V20H22zM18 22H20V24H18zM14 26H16V28H14zM16 28H18V30H16zM18 30H20V32H18zM18 26H20V28H18zM14 30H16V32H14z"></path><path d="M24.8008,9.1362a8.9943,8.9943,0,0,0-17.6006,0A6.4957,6.4957,0,0,0,6,21.4985v-2.26A4.4943,4.4943,0,0,1,8.144,11.019l.8155-.0639.0991-.812a6.9938,6.9938,0,0,1,13.8838,0l.0986.812.8154.0639A4.4944,4.4944,0,0,1,26,19.2383v2.26A6.4958,6.4958,0,0,0,24.8008,9.1362Z"></path></svg>`;
export default svgResultCarbonIcon;
