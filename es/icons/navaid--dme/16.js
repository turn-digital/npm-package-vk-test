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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M16,20a4,4,0,1,1,4-4A4.0045,4.0045,0,0,1,16,20Zm0-6a2,2,0,1,0,2,2A2.0021,2.0021,0,0,0,16,14Z"></path><path d="M24,24H8a2.0021,2.0021,0,0,1-2-2V10A2.0021,2.0021,0,0,1,8,8H24a2.0021,2.0021,0,0,1,2,2V22A2.0021,2.0021,0,0,1,24,24ZM8,10V22H24V10Z"></path><path d="M28,28H4a2.0021,2.0021,0,0,1-2-2V6A2.0021,2.0021,0,0,1,4,4H28a2.0021,2.0021,0,0,1,2,2V26A2.0021,2.0021,0,0,1,28,28ZM4,6V26H28V6Z"></path></svg>`;
export default svgResultCarbonIcon;
