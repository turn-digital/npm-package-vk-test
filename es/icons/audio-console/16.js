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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M28 14H27V2H25V14H24a2.0019 2.0019 0 00-2 2v2a2.0023 2.0023 0 002 2h1V30h2V20h1a2.0027 2.0027 0 002-2V16A2.0023 2.0023 0 0028 14zm0 4H24V16h4zM18 6H17V2H15V6H14a2.0019 2.0019 0 00-2 2v2a2.0019 2.0019 0 002 2h1V30h2V12h1a2.002 2.002 0 002-2V8A2.002 2.002 0 0018 6zm0 4H14V8h4zM8 20H7V2H5V20H4a2.0023 2.0023 0 00-2 2v2a2.0023 2.0023 0 002 2H5v4H7V26H8a2.0023 2.0023 0 002-2V22A2.0023 2.0023 0 008 20zm0 4H4V22H8z" transform="translate(0 .005)"></path></svg>`;
export default svgResultCarbonIcon;
