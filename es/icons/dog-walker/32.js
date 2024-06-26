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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M20 20H22V30H20zM4 23H6V30H4z"></path><path d="M16 30H14V26a1.0011 1.0011 0 00-1-1H11v5H9V23h4a3.0033 3.0033 0 013 3zM7.5 22A3.5041 3.5041 0 014 18.5V17H2V15H6v3.5a1.5 1.5 0 003 0V15h4v2H11v1.5A3.5041 3.5041 0 017.5 22zM27 10H21.354a2.9861 2.9861 0 00-2.7856 1.8857l-1.4419 3.6055-3.6079 4.51 1.562 1.249 3.7-4.625 1.645-3.9961A.9949.9949 0 0121.354 12H27a1.0009 1.0009 0 011 1v7H25V30h2V22h1a2.0023 2.0023 0 002-2V13A3.0033 3.0033 0 0027 10zM24 9a4 4 0 114-4A4.0045 4.0045 0 0124 9zm0-6a2 2 0 102 2A2.0021 2.0021 0 0024 3z"></path></svg>`;
export default svgResultCarbonIcon;
