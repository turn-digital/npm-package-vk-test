/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { svg } from 'lit';
import spread from '../../../globals/directives/spread';
const svgResultCarbonIcon = ({ children, ...attrs } = {}) =>
  svg`<svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" ...="${spread(
    attrs
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M2 2H6V6H2zM10 2H14V6H10zM18 2H22V6H18zM26 2H30V6H26zM2 10H6V14H2zM10 10H14V14H10zM18 10H22V14H18zM26 10H30V14H26zM2 18H6V22H2zM10 18H14V22H10zM18 18H22V22H18zM26 18H30V22H26zM2 26H6V30H2zM10 26H14V30H10zM18 26H22V30H18zM26 26H30V30H26z"></path></svg>`;
export default svgResultCarbonIcon;
