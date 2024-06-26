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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M16,24a8,8,0,0,0,6.85-3.89l-1.71-1a6,6,0,0,1-10.28,0l-1.71,1A8,8,0,0,0,16,24Z"></path><path d="M16,2A14,14,0,1,0,30,16,14,14,0,0,0,16,2Zm0,2a12,12,0,0,1,10.89,7H25a1,1,0,0,0-1-1H8a1,1,0,0,0-1,1H5.11A12,12,0,0,1,16,4Zm0,24A12,12,0,0,1,4,16a11.86,11.86,0,0,1,.4-3H7v2a2,2,0,0,0,2,2h3.31a2,2,0,0,0,2-1.67L14.83,12h2.34l.55,3.33a2,2,0,0,0,2,1.67H23a2,2,0,0,0,2-2V13h2.6a11.86,11.86,0,0,1,.4,3A12,12,0,0,1,16,28Z"></path></svg>`;
export default svgResultCarbonIcon;
