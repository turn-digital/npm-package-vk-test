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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M8 8H10V12H8zM8 14H10V18H8zM14 8H16V12H14zM14 14H16V18H14zM8 20H10V24H8zM14 20H16V24H14zM18 14L26.17 14 23.59 16.59 25 18 30 13 25 8 23.59 9.41 26.17 12 18 12 18 14z"></path><path d="M28,20v8H22V20H20v8H4V4H20V6h2V4a2,2,0,0,0-2-2H4A2,2,0,0,0,2,4V30H30V20Z"></path></svg>`;
export default svgResultCarbonIcon;
