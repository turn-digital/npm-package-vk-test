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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M17,11a3,3,0,0,1,3-3h.1a5,5,0,1,0,0-2H20a5,5,0,0,0-5,5v1H13a3,3,0,0,1-3-3V7A5,5,0,0,0,5,2H4V4H5A3,3,0,0,1,8,7V9a5,5,0,0,0,5,5h2v7a3,3,0,0,1-3,3h-.1a5,5,0,1,0,0,2H12a5,5,0,0,0,5-5h2.5A2.5,2.5,0,0,1,22,23.5,4.51,4.51,0,0,0,26.5,28H28V26H26.5A2.5,2.5,0,0,1,24,23.5,4.51,4.51,0,0,0,19.5,19H17Zm8-7a3,3,0,1,1-3,3A3,3,0,0,1,25,4ZM7,28a3,3,0,1,1,3-3A3,3,0,0,1,7,28Z"></path></svg>`;
export default svgResultCarbonIcon;
