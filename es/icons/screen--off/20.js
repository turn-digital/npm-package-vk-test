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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M28,22H11.41L30,3.41,28.59,2l-2,2H4A2,2,0,0,0,2,6V22H4V6H24.59L2,28.59,3.41,30l6-6H12v4H8v2H24V28H20V24h8a2,2,0,0,0,2-2V9H28ZM18,28H14V24h4Z"></path></svg>`;
export default svgResultCarbonIcon;
