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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M8 14H14V16H8zM8 6H20V8H8zM8 10H20V12H8zM8 24H14V26H8zM30 24V22H27.8989a4.9678 4.9678 0 00-.7319-1.7529l1.49-1.49-1.414-1.414-1.49 1.49A4.9678 4.9678 0 0024 18.1011V16H22v2.1011a4.9678 4.9678 0 00-1.7529.7319l-1.49-1.49-1.414 1.414 1.49 1.49A4.9678 4.9678 0 0018.1011 22H16v2h2.1011a4.9678 4.9678 0 00.7319 1.7529l-1.49 1.49 1.414 1.414 1.49-1.49A4.9678 4.9678 0 0022 27.8989V30h2V27.8989a4.9678 4.9678 0 001.7529-.7319l1.49 1.49 1.414-1.414-1.49-1.49A4.9678 4.9678 0 0027.8989 24zm-7 2a3 3 0 113-3A3.0033 3.0033 0 0123 26z"></path><path d="M14,30H6a2.0021,2.0021,0,0,1-2-2V4A2.0021,2.0021,0,0,1,6,2H22a2.0021,2.0021,0,0,1,2,2V14H22V4H6V28h8Z"></path></svg>`;
export default svgResultCarbonIcon;
