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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="m22,8v2c2.2061,0,4,1.7944,4,4s-1.7939,4-4,4h-12v-5l-6,6,6,6v-5h12c3.3086,0,6-2.6914,6-6s-2.6914-6-6-6Z"></path></svg>`;
export default svgResultCarbonIcon;
