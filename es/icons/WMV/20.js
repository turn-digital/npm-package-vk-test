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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M29 9L27 22 25 9 23 9 25.52 23 28.48 23 31 9 29 9zM19 9L17.48 14 17 15.98 16.54 14 15 9 13 9 13 23 15 23 15 15 14.84 13 15.42 15 17 19.63 18.58 15 19.16 13 19 15 19 23 21 23 21 9 19 9zM9.2 9L8.86 17 8.6 21.54 8.19 18 7.51 12.54 5.49 12.54 4.81 18 4.4 21.54 4.14 17 3.8 9 2 9 3 23 5.27 23 6.03 18.07 6.49 14 6.5 13.97 6.51 14 6.97 18.07 7.73 23 10 23 11 9 9.2 9z"></path></svg>`;
export default svgResultCarbonIcon;
