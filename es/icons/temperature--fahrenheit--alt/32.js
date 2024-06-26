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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M26 11L26 9 15 9 15 27 17 27 17 19 25 19 25 17 17 17 17 11 26 11zM8 13a4 4 0 114-4h0A4.0118 4.0118 0 018 13zM8 7a2 2 0 102 2h0A2.0059 2.0059 0 008 7z"></path></svg>`;
export default svgResultCarbonIcon;
