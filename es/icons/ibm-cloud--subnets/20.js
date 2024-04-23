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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M26,22a3.6069,3.6069,0,0,0-2,.6L19.4143,18,18,19.4141,22.6,24a4.1755,4.1755,0,0,0-.4,1H9.8583A3.5525,3.5525,0,0,0,9.4,24L24,9.4a3.6069,3.6069,0,0,0,2,.6,4,4,0,1,0-3.8569-5H9.9A4.0785,4.0785,0,0,0,6,2a4,4,0,0,0,0,8,3.6066,3.6066,0,0,0,2-.6L12.5858,14,14,12.5859,9.4,8a4.175,4.175,0,0,0,.4-1H22.1418A3.5553,3.5553,0,0,0,22.6,8L8,22.6A3.6066,3.6066,0,0,0,6,22a4,4,0,1,0,3.8569,5H22.1A4.0118,4.0118,0,1,0,26,22ZM26,4a2,2,0,1,1-2,2A2.0058,2.0058,0,0,1,26,4ZM6,8A2,2,0,1,1,8,6,2.0058,2.0058,0,0,1,6,8ZM6,28a2,2,0,1,1,2-2A2.0058,2.0058,0,0,1,6,28Zm20,0a2,2,0,1,1,2-2A2.0058,2.0058,0,0,1,26,28Z"></path></svg>`;
export default svgResultCarbonIcon;
