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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path stroke-width="0" d="M19 23h-2v-14h6c1.103 0 2 .897 2 2v5c0 1.103-.897 2-2 2h-4v5zm0-7h4v-5.0015h-4v5.0015zM7 11L10 11 10 21 7 21 7 23 15 23 15 21 12 21 12 11 15 11 15 9 7 9 7 11z"></path></svg>`;
export default svgResultCarbonIcon;
