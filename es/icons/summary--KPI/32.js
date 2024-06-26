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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M7.6667 27.5027L2 22.4484l1.3311-1.4927 5.6411 5.0316 7.6906-7.4449a1.9282 1.9282 0 012.6736-.0084L22.96 21.9983l5.5791-5.9735L30 17.3905l-5.5812 5.9758a1.996 1.996 0 01-2.8379.08l-3.5765-3.4191-7.666 7.4206A1.9629 1.9629 0 017.6667 27.5027zM30 11L26 11 28 8 30 11zM22 4H18V6h4V8H19v2h3v2H18v2h4a2.0027 2.0027 0 002-2V6A2.0023 2.0023 0 0022 4zM16 14H10V10a2.002 2.002 0 012-2h2V6H10V4h4a2.0023 2.0023 0 012 2V8a2.0023 2.0023 0 01-2 2H12v2h4zM6 12L6 4 4 4 4 5 2 5 2 7 4 7 4 12 2 12 2 14 8 14 8 12 6 12z"></path></svg>`;
export default svgResultCarbonIcon;
