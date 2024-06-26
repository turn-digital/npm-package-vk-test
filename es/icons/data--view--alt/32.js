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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<circle cx="22" cy="24" r="2"></circle><path d="M29.7769 23.4785A8.64 8.64 0 0022 18a8.64 8.64 0 00-7.7769 5.4785L14 24l.2231.5215A8.64 8.64 0 0022 30a8.64 8.64 0 007.7769-5.4785L30 24zM22 28a4 4 0 114-4A4.0045 4.0045 0 0122 28zM7 17H12V19H7zM7 12H19V14H7zM7 7H19V9H7z"></path><path d="M22,2,4,2A2.0058,2.0058,0,0,0,2,4V28a2.0058,2.0058,0,0,0,2,2h8V28H4V4H22V15h2V4A2.0058,2.0058,0,0,0,22,2Z"></path></svg>`;
export default svgResultCarbonIcon;
