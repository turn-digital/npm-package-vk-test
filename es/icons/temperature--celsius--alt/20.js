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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M26 27H17a2.0023 2.0023 0 01-2-2V11a2.002 2.002 0 012-2h9v2H17V25h9zM8 13a4 4 0 114-4h0A4.0118 4.0118 0 018 13zM8 7a2 2 0 102 2h0A2.0059 2.0059 0 008 7z"></path></svg>`;
export default svgResultCarbonIcon;
