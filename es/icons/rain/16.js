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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M23.5 22H8.5A6.5 6.5 0 017.2 9.14a9 9 0 0117.6 0A6.5 6.5 0 0123.5 22zM16 4a7 7 0 00-6.94 6.14L9 11 8.14 11a4.5 4.5 0 00.36 9h15a4.5 4.5 0 00.36-9L23 11l-.1-.82A7 7 0 0016 4zM14 30a.93.93 0 01-.45-.11 1 1 0 01-.44-1.34l2-4a1 1 0 111.78.9l-2 4A1 1 0 0114 30zM20 30a.93.93 0 01-.45-.11 1 1 0 01-.44-1.34l2-4a1 1 0 111.78.9l-2 4A1 1 0 0120 30zM8 30a.93.93 0 01-.45-.11 1 1 0 01-.44-1.34l2-4a1 1 0 111.78.9l-2 4A1 1 0 018 30z"></path></svg>`;
export default svgResultCarbonIcon;
