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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M16,12a4,4,0,1,1-4,4,4.0045,4.0045,0,0,1,4-4m0-2a6,6,0,1,0,6,6,6,6,0,0,0-6-6Z" transform="translate(0 .005)"></path><path d="M6.854 5.375H8.854V10.333H6.854z" transform="rotate(-45 7.86 7.856)"></path><path d="M2 15.005H7V17.005000000000003H2z"></path><path d="M5.375 23.147H10.333V25.147H5.375z" transform="rotate(-45 7.86 24.149)"></path><path d="M15 25.005H17V30.005H15z"></path><path d="M23.147 21.668H25.147V26.625999999999998H23.147z" transform="rotate(-45 24.152 24.149)"></path><path d="M25 15.005H30V17.005000000000003H25z"></path><path d="M21.668 6.854H26.625999999999998V8.854H21.668z" transform="rotate(-45 24.152 7.856)"></path><path d="M15 2.005H17V7.005H15z"></path></svg>`;
export default svgResultCarbonIcon;
