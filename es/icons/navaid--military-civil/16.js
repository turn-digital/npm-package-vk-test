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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M16,24a8,8,0,1,1,8-8A8.0092,8.0092,0,0,1,16,24Zm0-14a6,6,0,1,0,6,6A6.0067,6.0067,0,0,0,16,10Z"></path><path d="M30,14H27.8193A12.0112,12.0112,0,0,0,18,4.1807V2H14V4.1807A12.0112,12.0112,0,0,0,4.1807,14H2v4H4.1807A12.0112,12.0112,0,0,0,14,27.8193V30h4V27.8193A12.0112,12.0112,0,0,0,27.8193,18H30ZM16,26A10,10,0,1,1,26,16,10.0114,10.0114,0,0,1,16,26Z"></path></svg>`;
export default svgResultCarbonIcon;
