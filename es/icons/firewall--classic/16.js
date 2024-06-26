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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M28 20V17a4 4 0 00-8 0v3a2.0023 2.0023 0 00-2 2v6a2.0023 2.0023 0 002 2h8a2.0023 2.0023 0 002-2V22A2.0023 2.0023 0 0028 20zm-6-3a2 2 0 014 0v3H22zm6 11H20V22h8zM15 27H4a2 2 0 01-2-2V22a2 2 0 012-2H15v2H4v3H15zM17 18H8a2 2 0 01-2-2V13a2 2 0 012-2H19v2H8v3h9zM22 9H4A2 2 0 012 7V4A2 2 0 014 2H22a2 2 0 012 2V7A2 2 0 0122 9zM4 7H22V4H4z"></path></svg>`;
export default svgResultCarbonIcon;
