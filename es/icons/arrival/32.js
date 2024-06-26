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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M2 28H30V30H2zM17.21 5.23l1.39.38 1 11.29 5.87 1.57A2 2 0 0127 20.62a1.88 1.88 0 01-1.37 1.52 2 2 0 01-1 0l-18.7-5a1.89 1.89 0 01-1.33-2.3L6.35 8.34l1.44.38L8.4 13.9l6 1.62L17.21 5.23m-1-2.2a1 1 0 00-.68.69L13 13.07l-2.81-.75L9.69 7.79A1 1 0 009 7L5.87 6.14a.94.94 0 00-.5 0 1 1 0 00-.68.68l-2 7.49a3.87 3.87 0 002.74 4.74l18.71 5A3.87 3.87 0 0029 21a4 4 0 00-3-4.42l-4.52-1.21L20.53 4.71a1 1 0 00-.72-.85L16.73 3a1.06 1.06 0 00-.5 0z"></path></svg>`;
export default svgResultCarbonIcon;
