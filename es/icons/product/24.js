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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M8 18H14V20H8zM8 22H18V24H8z"></path><path d="M26,4H6A2.0025,2.0025,0,0,0,4,6V26a2.0025,2.0025,0,0,0,2,2H26a2.0025,2.0025,0,0,0,2-2V6A2.0025,2.0025,0,0,0,26,4ZM18,6v4H14V6ZM6,26V6h6v6h8V6h6l.0012,20Z"></path></svg>`;
export default svgResultCarbonIcon;
