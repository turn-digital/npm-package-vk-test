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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M28 28h-6v-4c0-1.1.9-2 2-2h2v-2h-4v-2h4c1.1 0 2 .9 2 2v2c0 1.1-.9 2-2 2h-2v2h4V28zM2 22H16V24H2zM26 12L26 4 24 4 24 5 22 5 22 7 24 7 24 12 22 12 22 14 24 14 26 14 28 14 28 12zM2 8H16V10H2z"></path></svg>`;
export default svgResultCarbonIcon;
