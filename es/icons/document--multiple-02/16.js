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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M18,31H6c-1.1,0-2-0.9-2-2V12h2v17h12V31z"></path><path d="M22,27H10c-1.1,0-2-0.9-2-2V8h2v17h12V27z"></path><path d="M16 16H24V18H16z"></path><path d="M27.7,9.3l-7-7C20.5,2.1,20.3,2,20,2h-6c-1.1,0-2,0.9-2,2v17c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V10	C28,9.7,27.9,9.5,27.7,9.3z M20,4.4l5.6,5.6H20V4.4z M26,21H14V4h4v6c0,1.1,0.9,2,2,2h6V21z"></path></svg>`;
export default svgResultCarbonIcon;
