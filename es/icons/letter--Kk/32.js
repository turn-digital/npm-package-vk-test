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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M15 9L12.89 9 9 15.55 9 9 7 9 7 23 9 23 9 18.71 9.93 17.22 12.89 23 15 23 11.11 15.43 15 9zM22.78 23L25 23 21.22 17 25 13 22.76 13 19 17.17 19 9 17 9 17 23 19 23 19 19.25 19.96 18.21 22.78 23z"></path></svg>`;
export default svgResultCarbonIcon;
