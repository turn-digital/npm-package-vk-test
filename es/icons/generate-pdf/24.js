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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M24,24v4H8V24H6v4H6a2,2,0,0,0,2,2H24a2,2,0,0,0,2-2h0V24Z"></path><path d="M21 21L19.586 19.586 17 22.172 17 14 15 14 15 22.172 12.414 19.586 11 21 16 26 21 21zM28 4L28 2 22 2 22 12 24 12 24 8 27 8 27 6 24 6 24 4 28 4zM17 12H13V2h4a3.0033 3.0033 0 013 3V9A3.0033 3.0033 0 0117 12zm-2-2h2a1.0011 1.0011 0 001-1V5a1.0011 1.0011 0 00-1-1H15zM9 2H4V12H6V9H9a2.0027 2.0027 0 002-2V4A2.0023 2.0023 0 009 2zM6 7V4H9l.001 3z"></path></svg>`;
export default svgResultCarbonIcon;
