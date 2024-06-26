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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M8 30H2V24H8zM4 28H6V26H4zM19 30H13V24h6zm-4-2h2V26H15zM30 30H24V24h6zm-4-2h2V26H26zM16 10a4 4 0 114-4A4.0045 4.0045 0 0116 10zm0-6a2 2 0 102 2A2.002 2.002 0 0016 4zM26 16H21a4.0045 4.0045 0 01-4-4H15a4.0045 4.0045 0 01-4 4H6a2.0023 2.0023 0 00-2 2v4H6V18h5A5.9694 5.9694 0 0015 16.46V22h2V16.46A5.9694 5.9694 0 0021 18h5v4h2V18A2.0023 2.0023 0 0026 16z"></path></svg>`;
export default svgResultCarbonIcon;
