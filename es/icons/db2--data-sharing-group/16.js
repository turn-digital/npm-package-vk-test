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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M8 28v-6.1699l2.5898 2.5801 1.4102-1.4102-5-5-5 5 1.4102 1.4102 2.5898-2.5801v6.1699c0 1.1025.8972 2 2 2h9v-2H8zM25 17c-2.8506 0-5 1.29-5 3v7c0 1.71 2.1494 3 5 3s5-1.29 5-3v-7c0-1.71-2.1494-3-5-3zm0 2c1.936 0 3 .751 3 1s-1.064 1-3 1-3-.751-3-1 1.064-1 3-1zm0 9c-1.936 0-3-.751-3-1v-4.5796c.8264.3623 1.8508.5796 3 .5796s2.1736-.2173 3-.5796v4.5796c0 .249-1.064 1-3 1zM28.5898 7.5898l-2.5898 2.5801V4c0-1.1025-.8972-2-2-2H15v2h9v6.1699l-2.5898-2.5801-1.4102 1.4102 5 5 5-5-1.4102-1.4102zM7 15c2.8506 0 5-1.29 5-3V5c0-1.71-2.1494-3-5-3S2 3.29 2 5v7c0 1.71 2.1494 3 5 3zm0-11c1.936 0 3 .751 3 1s-1.064 1-3 1-3-.751-3-1 1.064-1 3-1zm-3 3.4204c.8264.3623 1.8508.5796 3 .5796s2.1736-.2173 3-.5796v4.5796c0 .249-1.064 1-3 1s-3-.751-3-1V7.4204z"></path></svg>`;
export default svgResultCarbonIcon;
