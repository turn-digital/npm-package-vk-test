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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M23,23v3H8.5a4.5,4.5,0,0,1,0-9H9V15H8.5a6.5,6.5,0,0,0,0,13H23v3h8V23Zm6,6H25V25h4Z"></path><path d="M21 22H19V19H13v3H11V19a2.0023 2.0023 0 012-2h6a2.0023 2.0023 0 012 2zM16 16a3 3 0 113-3A3.0033 3.0033 0 0116 16zm0-4a1 1 0 101 1A1.0013 1.0013 0 0016 12z"></path><path d="M23.5,4H9V1H1V9H9V6H23.5a4.5,4.5,0,0,1,0,9H23v2h.5a6.5,6.5,0,0,0,0-13ZM7,7H3V3H7Z"></path></svg>`;
export default svgResultCarbonIcon;
