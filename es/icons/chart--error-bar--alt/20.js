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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M14 10V8H8v2h2v4.1836a2.983 2.983 0 000 5.6328V24H8v2h6V24H12V19.8164a2.983 2.983 0 000-5.6328V10zM26 6V4H20V6h2V8.1836a2.983 2.983 0 000 5.6328V18H20v2h6V18H24V13.8164a2.983 2.983 0 000-5.6328V6z"></path><path d="M30,30H4a2,2,0,0,1-2-2V2H4V28H30Z"></path></svg>`;
export default svgResultCarbonIcon;
