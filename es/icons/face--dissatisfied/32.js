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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M16,2A14,14,0,1,0,30,16,14,14,0,0,0,16,2Zm0,26A12,12,0,1,1,28,16,12,12,0,0,1,16,28Z"></path><path d="M11.5 11A2.5 2.5 0 1014 13.5 2.5 2.5 0 0011.5 11zM20.5 11A2.5 2.5 0 1023 13.5 2.5 2.5 0 0020.5 11zM16 19a8 8 0 00-6.85 3.89l1.71 1a6 6 0 0110.28 0l1.71-1A8 8 0 0016 19z"></path></svg>`;
export default svgResultCarbonIcon;
