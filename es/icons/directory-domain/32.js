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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M28,26H18.8157A2.9959,2.9959,0,0,0,17,24.1841V19h7a2.0025,2.0025,0,0,0,2-2V4a2.0025,2.0025,0,0,0-2-2H8A2.0025,2.0025,0,0,0,6,4V17a2.0025,2.0025,0,0,0,2,2h7v5.1841A2.9959,2.9959,0,0,0,13.1843,26H4v2h9.1843a2.982,2.982,0,0,0,5.6314,0H28ZM24,12H8V9H24Zm0-8V7H8V4ZM8,14H24v3H8Zm8,14a1,1,0,1,1,1-1A1.0008,1.0008,0,0,1,16,28Z"></path></svg>`;
export default svgResultCarbonIcon;
