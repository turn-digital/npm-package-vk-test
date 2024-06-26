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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M11 21H9V19a3.0033 3.0033 0 013-3h6v2H12a1.0011 1.0011 0 00-1 1zM15 15a4 4 0 114-4A4.0045 4.0045 0 0115 15zm0-6a2 2 0 102 2A2.0021 2.0021 0 0015 9zM24 22a4 4 0 114-4A4.0045 4.0045 0 0124 22zm0-6a2 2 0 102 2A2.0021 2.0021 0 0024 16zM30 28H28V26a1.0011 1.0011 0 00-1-1H21a1.0011 1.0011 0 00-1 1v2H18V26a3.0033 3.0033 0 013-3h6a3.0033 3.0033 0 013 3z"></path><path d="M14,27.7334l-5.2344-2.791A8.9858,8.9858,0,0,1,4,17V4H24v6h2V4a2.0023,2.0023,0,0,0-2-2H4A2.0023,2.0023,0,0,0,2,4V17a10.9814,10.9814,0,0,0,5.8242,9.707L14,30Z"></path></svg>`;
export default svgResultCarbonIcon;
