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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M26 16.5859V13a9.8828 9.8828 0 00-1.0869-4.499L30 3.4141 28.5859 2 2 28.5859 3.4141 30l6-6H11v1a5 5 0 0010 0V24h7a1 1 0 001-1V20a.9993.9993 0 00-.293-.707zM19 25a3 3 0 01-6 0V24h6zM21.61 4.7383A9.9256 9.9256 0 0017 3.0508V1H15V3.0508A10.0136 10.0136 0 006 13v3.5859L3.293 19.293A.9993.9993 0 003 20v3a.9738.9738 0 00.0585.29z"></path></svg>`;
export default svgResultCarbonIcon;
