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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M28 9L26.5 14 26 16 25.5 14 24 9 22 9 22 23 24 23 24 15 23.8 13 24.4 15 26 19.6 27.6 15 28.2 13 28 15 28 23 30 23 30 9zM14 21L14 9 12 9 12 23 20 23 20 21zM8 23H2v-2h6v-4H4c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2h6v2H4v4h4c1.1 0 2 .9 2 2v4C10 22.1 9.1 23 8 23z"></path></svg>`;
export default svgResultCarbonIcon;
