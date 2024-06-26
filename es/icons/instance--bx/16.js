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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M12 5A3.0033 3.0033 0 009 2H4V15H9a3.0033 3.0033 0 003-3V10.5a2.977 2.977 0 00-.78-2 2.9768 2.9768 0 00.78-2zM6 4H9a1.0013 1.0013 0 011 1V6.5513A.9587.9587 0 019 7.5H6zm4 8a1.0009 1.0009 0 01-1 1H6V9.5H9a1.0009 1.0009 0 011 1zM22 5L20 5 18 8.897 16 5 14 5 16.905 10 14 15 16 15 18 11.201 20 15 22 15 19.098 10 22 5z"></path><circle cx="9" cy="27" r="1"></circle><path d="M2 18H6V20H2zM8 18H12V20H8zM14 18H18V20H14zM20 18H24V20H20zM26 18H30V20H26zM26 31H6a2.0021 2.0021 0 01-2-2V25a2.0021 2.0021 0 012-2H26a2.0021 2.0021 0 012 2v4A2.0021 2.0021 0 0126 31zM6 25v4H26V25z"></path></svg>`;
export default svgResultCarbonIcon;
