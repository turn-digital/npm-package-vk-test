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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M17,12.09V5.8281l4.5859,4.586L23,9,16,2,9,9l1.4141,1.4141L15,5.8281V12.09A5.9925,5.9925,0,0,0,15,23.91V28h2V23.91A5.9925,5.9925,0,0,0,17,12.09ZM16,22a4,4,0,1,1,4-4A4.0045,4.0045,0,0,1,16,22Z"></path></svg>`;
export default svgResultCarbonIcon;
