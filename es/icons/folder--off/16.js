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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M28 8H25.4141L30 3.4141 28.5859 2 2 28.5859 3.4141 30l2-2H28a2 2 0 002-2V10A2 2 0 0028 8zm0 18H7.4141l16-16H28zM4 6h7.1716l3.4141 3.4141L15.1716 10H18V8H16L12.5859 4.5859A2.0007 2.0007 0 0011.1716 4H4A2 2 0 002 6V24H4z"></path></svg>`;
export default svgResultCarbonIcon;
