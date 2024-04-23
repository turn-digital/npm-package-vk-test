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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path stroke-width="0" d="M17 11L20 11 20 21 17 21 17 23 25 23 25 21 22 21 22 11 25 11 25 9 17 9 17 11zM13 9h-4c-1.103 0-2 .897-2 2v12h2v-5h4v5h2v-12c0-1.103-.897-2-2-2zm-4 7v-5h4v5h-4z"></path></svg>`;
export default svgResultCarbonIcon;
