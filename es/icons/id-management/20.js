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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M15 20H9a3 3 0 00-3 3v2H8V23a1 1 0 011-1h6a1 1 0 011 1v2h2V23A3 3 0 0015 20zM12 19a4 4 0 10-4-4A4 4 0 0012 19zm0-6a2 2 0 11-2 2A2 2 0 0112 13z"></path><path d="M28,19v9H4V8H16V6H4A2,2,0,0,0,2,8V28a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V19Z"></path><path d="M20 19H26V21H20zM22 23H26V25H22zM32 10V8H29.8989a4.9678 4.9678 0 00-.7319-1.7529l1.49-1.49-1.414-1.414-1.49 1.49A4.9678 4.9678 0 0026 4.1011V2H24V4.1011a4.9678 4.9678 0 00-1.7529.7319l-1.49-1.49-1.414 1.414 1.49 1.49A4.9678 4.9678 0 0020.1011 8H18v2h2.1011a4.9678 4.9678 0 00.7319 1.7529l-1.49 1.49 1.414 1.414 1.49-1.49A4.9678 4.9678 0 0024 13.8989V16h2V13.8989a4.9678 4.9678 0 001.7529-.7319l1.49 1.49 1.414-1.414-1.49-1.49A4.9678 4.9678 0 0029.8989 10zm-7 2a3 3 0 113-3A3.0033 3.0033 0 0125 12z"></path></svg>`;
export default svgResultCarbonIcon;
