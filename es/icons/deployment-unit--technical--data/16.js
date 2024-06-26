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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M21 23H17V9h4a4.0045 4.0045 0 014 4v6A4.0042 4.0042 0 0121 23zm-2-2h2a2.0023 2.0023 0 002-2V13a2.002 2.002 0 00-2-2H19zM7 11L10 11 10 23 12 23 12 11 15 11 15 9 7 9 7 11z"></path></svg>`;
export default svgResultCarbonIcon;
