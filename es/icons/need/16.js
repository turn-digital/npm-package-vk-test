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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M29.1211 16.8789A2.98 2.98 0 0027.01 16H27a2.9774 2.9774 0 00-2.1211.8789L19.9778 21.78A2.9943 2.9943 0 0017 19H10a5.0059 5.0059 0 00-5 5v.667L2 28.6631l1.6 1.2L7 25.333V24a3.0033 3.0033 0 013-3h7a1 1 0 010 2H13v2h4.9287a3.9717 3.9717 0 002.8286-1.1719L26.293 18.293A.9929.9929 0 0127 18h.0034a1 1 0 01.7036 1.707l-7.414 7.4141A2.9791 2.9791 0 0118.1714 28H11v2h7.1714a4.9665 4.9665 0 003.5356-1.4648l7.4141-7.4141a2.9989 2.9989 0 000-4.2422zM21.586 8.586L18 12 18 2 16 2 16 12 12.414 8.586 11 10 17 16 23 10 21.586 8.586z"></path></svg>`;
export default svgResultCarbonIcon;
