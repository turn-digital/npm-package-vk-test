/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { svg } from 'lit';
import spread from '../../../globals/directives/spread';
const svgResultCarbonIcon = ({ children, ...attrs } = {}) =>
  svg`<svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" ...="${spread(
    attrs
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M25 23H19a3 3 0 00-3 3v2h2V26a1 1 0 011-1h6a1 1 0 011 1v2h2V26A3 3 0 0025 23zM18 18a4 4 0 104-4A4 4 0 0018 18zm6 0a2 2 0 11-2-2A2 2 0 0124 18zM15 15.415L13.586 14 11 16.587 8.414 14 7 15.415 9.586 18 7 20.586 8.414 22 11 19.414 13.586 22 15 20.586 12.414 18 15 15.415z"></path><path d="M14,26H4V6h7.1716l3.4141,3.4143L15.1716,10H28v8h2V10a2,2,0,0,0-2-2H16L12.5859,4.5858A2,2,0,0,0,11.1716,4H4A2,2,0,0,0,2,6V26a2,2,0,0,0,2,2H14Z"></path></svg>`;
export default svgResultCarbonIcon;
