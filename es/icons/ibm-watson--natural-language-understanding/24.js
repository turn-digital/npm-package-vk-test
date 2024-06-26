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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M6 23H11V25H6zM6 19H11V21H6z"></path><path d="M13 30H4c-1.1 0-2-.9-2-2V17c0-1.1.9-2 2-2h9c1.1 0 2 .9 2 2v11C15 29.1 14.1 30 13 30zM4 17v11h9V17H4zM19 2H27V4H19zM22 6H30V8H22zM22 10H30V12H22zM19 14H27V16H19zM22 18H30V20H22zM12 1l-1.4 1.4L13.2 5H4C2.9 5 2 5.9 2 7v5h2V7h9.2l-2.6 2.6L12 11l5-5L12 1z"></path></svg>`;
export default svgResultCarbonIcon;
