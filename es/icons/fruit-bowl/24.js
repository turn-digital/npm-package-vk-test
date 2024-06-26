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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M26,15a6.0025,6.0025,0,0,0-3.1067-5.2529A3.9792,3.9792,0,0,0,24,7H22a2.0023,2.0023,0,0,1-2,2,6.004,6.004,0,0,0-5.9946,5.8921A7.0005,7.0005,0,0,1,12,10,3.9961,3.9961,0,0,0,9,6.1419V4H7V6.1419A3.9961,3.9961,0,0,0,4,10v5H2v1a14,14,0,0,0,28,0V15Zm-6-4a4.0045,4.0045,0,0,1,4,4H16A4.0045,4.0045,0,0,1,20,11ZM6,10a2,2,0,1,1,4,0,8.991,8.991,0,0,0,1.5322,5H6ZM16,28A12.0166,12.0166,0,0,1,4.0415,17h23.917A12.0166,12.0166,0,0,1,16,28Z"></path></svg>`;
export default svgResultCarbonIcon;
