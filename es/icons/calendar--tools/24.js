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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M23.981,24.4333A3.9549,3.9549,0,0,0,26,25a4.0045,4.0045,0,0,0,4-4,3.9427,3.9427,0,0,0-.1492-1.0228l-2.4367,2.4369-.0005-.0005a1.9991,1.9991,0,1,1-2.8272-2.8272l-.0005-.0005,2.4368-2.4368A3.95,3.95,0,0,0,26,17a4.0045,4.0045,0,0,0-4,4,3.9544,3.9544,0,0,0,.5669,2.0191L17,28.586,18.4141,30Z"></path><path fill-rule="evenodd" d="M26,4H22V2H20V4H12V2H10V4H6A2,2,0,0,0,4,6V26a2,2,0,0,0,2,2h8V26H6V6h4V8h2V6h8V8h2V6h4v8h2V6A2,2,0,0,0,26,4Z"></path></svg>`;
export default svgResultCarbonIcon;
