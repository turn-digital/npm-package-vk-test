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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M9 2H11V12H9z"></path><path d="M14 11a4 4 0 01-8 0V2H4v9a6 6 0 005 5.91V30h2V16.91A6 6 0 0016 11V2H14zM22 2H21V30h2V20h3a2 2 0 002-2V8A5.78 5.78 0 0022 2zm4 16H23V4.09c2.88.56 3 3.54 3 3.91z"></path></svg>`;
export default svgResultCarbonIcon;
