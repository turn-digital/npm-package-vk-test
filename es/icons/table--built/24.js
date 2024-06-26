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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M28,8H24V4a2.0025,2.0025,0,0,0-2-2H4A2.0025,2.0025,0,0,0,2,4V22a2.0025,2.0025,0,0,0,2,2H8v4a2.0025,2.0025,0,0,0,2,2H28a2.0025,2.0025,0,0,0,2-2V10A2.0025,2.0025,0,0,0,28,8ZM22,22H14V17h8Zm0-7H14V10h8ZM12,15H4V10h8ZM22,4V8H4V4ZM4,22V17h8v5Zm24,6H10V24H22a2.0025,2.0025,0,0,0,2-2V10h4Z"></path></svg>`;
export default svgResultCarbonIcon;
