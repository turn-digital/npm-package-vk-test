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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M28,20H26v2h2v6H4V22H6V20H4a2.0024,2.0024,0,0,0-2,2v6a2.0024,2.0024,0,0,0,2,2H28a2.0024,2.0024,0,0,0,2-2V22A2.0024,2.0024,0,0,0,28,20Z"></path><circle cx="7" cy="25" r="1"></circle><path d="M13 4H15V12H13zM9 4H11V12H9zM21 12H19a2.0021 2.0021 0 01-2-2V6a2.0021 2.0021 0 012-2h2a2.0021 2.0021 0 012 2v4A2.0021 2.0021 0 0121 12zM19 6v4h2V6zM21 14H23V22H21zM9 14H11V22H9zM17 22H15a2.0021 2.0021 0 01-2-2V16a2.0021 2.0021 0 012-2h2a2.0021 2.0021 0 012 2v4A2.0021 2.0021 0 0117 22zm-2-6v4h2V16z"></path></svg>`;
export default svgResultCarbonIcon;
