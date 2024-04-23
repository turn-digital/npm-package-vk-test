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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M30,17A15.017,15.017,0,0,0,15,2H14V8.0591A9.0122,9.0122,0,0,0,6.0591,16H4v1A11.0109,11.0109,0,0,0,14,27.9492V30h1A13.0084,13.0084,0,0,0,27.9492,18H30ZM16,4.0381A13.0217,13.0217,0,0,1,27.9619,16H16ZM14,10.08V16H8.08A7.0037,7.0037,0,0,1,14,10.08ZM6.0552,18H14v7.939A9.0134,9.0134,0,0,1,6.0552,18ZM16,27.9551V18h9.9551A11.0191,11.0191,0,0,1,16,27.9551Z"></path></svg>`;
export default svgResultCarbonIcon;
