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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M26,28H6a2.0021,2.0021,0,0,1-2-2V9H6V26H26V9h2V26A2.0021,2.0021,0,0,1,26,28Z"></path><path d="M19 21L19 9 17 9 17 23 24 23 24 21 19 21zM16 9L14 9 12 15 10 9 8 9 10.752 16 8 23 10 23 12 17 14 23 16 23 13.245 16 16 9zM4 4H28V6H4z"></path></svg>`;
export default svgResultCarbonIcon;
