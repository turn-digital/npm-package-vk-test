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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M7 12H4a2.0023 2.0023 0 01-2-2V6A2.0023 2.0023 0 014 4H7V6H4v4H7zM9 10H15V12H9zM17 10H23V12H17zM28 12H25V10h3V6H25V4h3a2.0023 2.0023 0 012 2v4A2.0023 2.0023 0 0128 12zM17 4H23V6H17zM9 4H15V6H9zM28 28H4a2.0023 2.0023 0 01-2-2V22a2.0023 2.0023 0 012-2H28a2.0023 2.0023 0 012 2v4A2.0023 2.0023 0 0128 28zM4 22v4H28V22zM2 15H30V17H2z"></path></svg>`;
export default svgResultCarbonIcon;
