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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 16 16">${children}<path d="M7.5 1H8.5V3.5H7.5z"></path><path d="M10.8 3.4H13.3V4.4H10.8z" transform="rotate(-45.001 12.074 3.922)"></path><path d="M12.5 7.5H15V8.5H12.5z"></path><path d="M11.6 10.8H12.6V13.3H11.6z" transform="rotate(-45.001 12.077 12.075)"></path><path d="M7.5 12.5H8.5V15H7.5z"></path><path d="M2.7 11.6H5.2V12.6H2.7z" transform="rotate(-45.001 3.929 12.078)"></path><path d="M1 7.5H3.5V8.5H1z"></path><path d="M3.4 2.7H4.4V5.2H3.4z" transform="rotate(-45.001 3.926 3.925)"></path><path d="M8,6c1.1,0,2,0.9,2,2s-0.9,2-2,2S6,9.1,6,8S6.9,6,8,6 M8,5C6.3,5,5,6.3,5,8s1.3,3,3,3s3-1.3,3-3S9.7,5,8,5z"></path></svg>`;
export default svgResultCarbonIcon;
