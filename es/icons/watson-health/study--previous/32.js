/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { svg } from 'lit';
import spread from '../../../globals/directives/spread';
const svgResultCarbonIcon = ({ children, ...attrs } = {}) =>
  svg`<svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" ...="${spread(
    attrs
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M8.07 21L2 15 8.07 9 9.5 10.41 4.86 15 9.5 19.59 8.07 21zM20 4a5 5 0 11-5 5 5 5 0 015-5m0-2a7 7 0 107 7A7 7 0 0020 2zM30 30H28V25a5 5 0 00-5-5H17a5 5 0 00-5 5v5H10V25a7 7 0 017-7h6a7 7 0 017 7z"></path></svg>`;
export default svgResultCarbonIcon;
