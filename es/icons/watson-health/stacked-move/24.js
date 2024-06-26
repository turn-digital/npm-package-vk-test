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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M15,28H4a2,2,0,0,1-2-2V11A2,2,0,0,1,4,9H15a2,2,0,0,1,2,2V26A2,2,0,0,1,15,28ZM4,11V26H15V11Z"></path><path d="M26,6,24.59,7.41,27,10H22V6a2,2,0,0,0-2-2H10V6H20V20h2V12h5l-2.41,2.59L26,16l5-5Z"></path></svg>`;
export default svgResultCarbonIcon;
