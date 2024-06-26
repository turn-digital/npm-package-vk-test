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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M18 19H30V21H18zM18 23H30V25H18zM18 27H26V29H18z"></path><path d="M24,4a3.9962,3.9962,0,0,0-3.8579,3H12V4H4v8h8V9h8.1421a3.94,3.94,0,0,0,.4248,1.019L10.019,20.5669A3.9521,3.9521,0,0,0,8,20a4,4,0,1,0,3.8579,5H16V23H11.8579a3.94,3.94,0,0,0-.4248-1.019L21.981,11.4331A3.9521,3.9521,0,0,0,24,12a4,4,0,0,0,0-8ZM10,10H6V6h4ZM8,26a2,2,0,1,1,2-2A2.0023,2.0023,0,0,1,8,26ZM24,10a2,2,0,1,1,2-2A2.0023,2.0023,0,0,1,24,10Z"></path></svg>`;
export default svgResultCarbonIcon;
