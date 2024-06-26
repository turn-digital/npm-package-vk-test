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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M24 12a4 4 0 114-4A4.0045 4.0045 0 0124 12zm0-6a2 2 0 102 2A2.0021 2.0021 0 0024 6zM26 22H21.8472L21.18 18H24V16H8v2h2.82l-.6668 4H6v2H9.82l-.6668 4H11.18l.6668-4h8.3056l.6668 4h2.0276L22.18 24H26zM12.18 22l.6665-4h6.3062l.6665 4z"></path></svg>`;
export default svgResultCarbonIcon;
