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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M28 2H18c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h2.4l1.7 3 1.7-1-2.3-4H18V4h10v6h-3v2h3c1.1 0 2-.9 2-2V4C30 2.9 29.1 2 28 2zM14.7 31L13 30l3.5-6H22c1.1 0 2-.9 2-2v-5h2v5c0 2.2-1.8 4-4 4h-4.4L14.7 31z"></path><circle cx="10" cy="17" r="1"></circle><circle cx="14" cy="17" r="1"></circle><circle cx="18" cy="17" r="1"></circle><path d="M12,26H6c-2.2,0-4-1.8-4-4V12c0-2.2,1.8-4,4-4h8v2H6c-1.1,0-2,0.9-2,2v10c0,1.1,0.9,2,2,2h6V26z"></path></svg>`;
export default svgResultCarbonIcon;
