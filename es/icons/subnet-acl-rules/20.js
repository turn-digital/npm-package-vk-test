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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M18 14H30V16H18zM18 19H26V21H18zM18 9H30V11H18z"></path><path d="M22,24v4H6V16h8V14H10V8a4.0008,4.0008,0,0,1,7.6675-1.6L19.5005,5.6A6.001,6.001,0,0,0,8,8v6H6a2.0023,2.0023,0,0,0-2,2V28a2.0023,2.0023,0,0,0,2,2H22a2.0023,2.0023,0,0,0,2-2V24Z"></path></svg>`;
export default svgResultCarbonIcon;
