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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M29.55 26.11L26.5 27.63 23.66 21H15a2 2 0 01-2-2V13a2 2 0 014 0v4h7V15H19V13a4 4 0 00-8 0v1a9 9 0 108.77 11H17.71A7 7 0 1111 16v3a4 4 0 004 4h7.34l3.16 7.37 4.95-2.48zM15.5 8A3.5 3.5 0 1119 4.5 3.5 3.5 0 0115.5 8zm0-5A1.5 1.5 0 1017 4.5 1.5 1.5 0 0015.5 3z"></path></svg>`;
export default svgResultCarbonIcon;
