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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M24 19L21 19 21 16 19 16 19 19 16 19 16 21 19 21 19 24 21 24 21 21 24 21 24 19z"></path><path d="M31 29.5859l-4.6885-4.6884a8.028 8.028 0 10-1.414 1.414L29.5859 31zM20 26a6 6 0 116-6A6.0066 6.0066 0 0120 26zM4 8H2V4A2.0021 2.0021 0 014 2H8V4H4zM26 8H24V4H20V2h4a2.0021 2.0021 0 012 2zM12 2H16V4H12zM8 26H4a2.0021 2.0021 0 01-2-2V20H4v4H8zM2 12H4V16H2z"></path></svg>`;
export default svgResultCarbonIcon;
