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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M17 6H30V8H17zM17 12H27V14H17zM17 18H30V20H17zM17 24H27V26H17zM11.59 13.41L8 9.83 8 9.83 4.41 13.42 3 12 8 7 13 12 11.59 13.41zM11.59 18.59L8 22.17 8 22.17 4.41 18.58 3 20 8 25 13 20 11.59 18.59z"></path></svg>`;
export default svgResultCarbonIcon;
