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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M6 26V17.8281l-3.5859 3.586L1 20l6-6 6 6-1.4141 1.4141L8 17.8281V26H18v2H8A2.0024 2.0024 0 016 26zM30 22L30 20 22 20 22 22 27.5 22 22 28 22 30 30 30 30 28 24.507 28 30 22zM26 6v8.1719l3.5859-3.586L31 12l-6 6-6-6 1.4141-1.4141L24 14.1719V6H14V4H24A2.0024 2.0024 0 0126 6zM8 2H3V4H8V6H4A2 2 0 002 8v2a2 2 0 002 2h6V4A2.0023 2.0023 0 008 2zm0 8H4V8H8z"></path></svg>`;
export default svgResultCarbonIcon;
