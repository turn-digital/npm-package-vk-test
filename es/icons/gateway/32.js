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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M31,16a1.9857,1.9857,0,0,0-.5859-1.4141L24.6211,8.793,27.489,5.9253a2,2,0,1,0-1.414-1.4141L23.207,7.3789l-5.7929-5.793a1.9995,1.9995,0,0,0-2.8282,0L8.793,7.3789,5.925,4.5112A2,2,0,1,0,4.511,5.9253L7.3789,8.793l-5.793,5.7929a1.9995,1.9995,0,0,0,0,2.8282l5.793,5.7929L4.511,26.0747a2,2,0,1,0,1.414,1.4141l2.868-2.8677,5.7929,5.793a1.9995,1.9995,0,0,0,2.8282,0l5.7929-5.793,2.868,2.8677a2,2,0,1,0,1.414-1.4141L24.6211,23.207l5.793-5.7929A1.9866,1.9866,0,0,0,31,16Zm-7.793,5.793L20.4141,19,19,20.4141l2.793,2.7929L16,29l-5.793-5.793L13,20.4141,11.5859,19,8.793,21.793,3,16l5.7925-5.7935L11.5859,13,13,11.5859,10.2065,8.7925,16,3l5.7935,5.7925L19,11.5859,20.4141,13l2.7934-2.7935L29,16Z"></path></svg>`;
export default svgResultCarbonIcon;
