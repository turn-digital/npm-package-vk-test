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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M24 21L24 9 22 9 22 23 30 23 30 21 24 21zM18 9L16.48 14 16 15.98 15.54 14 14 9 12 9 12 23 14 23 14 15 13.84 13 14.42 15 16 19.63 17.58 15 18.16 13 18 15 18 23 20 23 20 9 18 9zM10 9L8 9 6 15 4 9 2 9 4.75 16 2 23 4 23 6 17 8 23 10 23 7.25 16 10 9z"></path></svg>`;
export default svgResultCarbonIcon;
