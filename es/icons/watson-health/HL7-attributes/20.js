/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { svg } from 'lit';
import spread from '../../../globals/directives/spread';
const svgResultCarbonIcon = ({ children, ...attrs } = {}) =>
  svg`<svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" ...="${spread(
    attrs
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M29 9L21 9 21 13 23 13 23 11 26.847 11 22 23 24.157 23 29 11 29 9zM14 21L14 9 12 9 12 23 20 23 20 21 14 21zM8 9L8 15 4 15 4 9 2 9 2 23 4 23 4 17 8 17 8 23 10 23 10 9 8 9z"></path></svg>`;
export default svgResultCarbonIcon;
