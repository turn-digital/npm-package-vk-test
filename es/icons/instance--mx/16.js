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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M22 5L20 5 18 8.897 16 5 14 5 16.905 10 14 15 16 15 18 11.201 20 15 22 15 19.098 10 22 5zM10 2L8.485 6.374 8 8 7.535 6.374 6 2 4 2 4 15 6 15 6 7.374 5.841 5.378 6.421 7.374 8 12 9.579 7.374 10.159 5.374 10 7.374 10 15 12 15 12 2 10 2z"></path><circle cx="9" cy="27" r="1"></circle><path d="M2 18H6V20H2zM8 18H12V20H8zM14 18H18V20H14zM20 18H24V20H20zM26 18H30V20H26zM26 31H6a2.0021 2.0021 0 01-2-2V25a2.0021 2.0021 0 012-2H26a2.0021 2.0021 0 012 2v4A2.0021 2.0021 0 0126 31zM6 25v4H26V25z"></path></svg>`;
export default svgResultCarbonIcon;
