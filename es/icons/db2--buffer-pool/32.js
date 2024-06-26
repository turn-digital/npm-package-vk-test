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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M26.338 31L24.602 30 26.8895 26 23 26 26.993 19 28.73 20 26.4463 24 30.3367 24 26.338 31zM8 14H12V16H8zM20 14H24V16H20zM8 18H12V20H8zM14 18H18V20H14zM14 22H18V24H14z"></path><path d="M5,11H27v5h2V5c0-1.1025-.8972-2-2-2H5c-1.1028,0-2,.8975-2,2V27c0,1.1025,.8972,2,2,2h15v-2H5V11ZM27,5v4H5V5H27Z"></path></svg>`;
export default svgResultCarbonIcon;
