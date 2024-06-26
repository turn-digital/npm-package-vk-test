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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M30,14V10H26v2H20V6h2V2H18V4H6V2H2V6H4V18H2v4H6V20h6v6H10v4h4V28H26v2h4V26H28V14ZM6,6H18V18H6ZM26,26H14V20h4v2h4V18H20V14h6Z"></path></svg>`;
export default svgResultCarbonIcon;
