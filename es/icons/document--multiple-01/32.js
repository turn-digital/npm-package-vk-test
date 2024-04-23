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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M2 6H4V26H2zM6 4H8V28H6zM14 22H26V24H14zM14 16H26V18H14z"></path><path d="M29.7,9.3l-7-7C22.5,2.1,22.3,2,22,2H12c-1.1,0-2,0.9-2,2v24c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V10	C30,9.7,29.9,9.5,29.7,9.3z M22,4.4l5.6,5.6H22V4.4z M28,28H12V4h8v6c0,1.1,0.9,2,2,2h6V28z"></path></svg>`;
export default svgResultCarbonIcon;
