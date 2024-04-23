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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path stroke-width="0" d="M19 24H21V26H19z"></path><path stroke-width="0" d="M17 21h12c1.1046 0 2 .8954 2 2v4c0 1.1046-.8954 2-2 2h-12c-1.1046 0-2-.8954-2-2v-4c0-1.1046.8954-2 2-2zm12 6v-4h-12v4h12zM12 27h-2c-3.8599 0-7-3.1401-7-7v-2h2v2c0 2.7568 2.2432 5 5 5h2v2zM27 18v-7c0-3.8599-3.1401-7-7-7h-7v2h7c2.7568 0 5 2.2432 5 5v7h2zM10 8V4c0-1.1046-.8954-2-2-2H2v13h2v-5h1.48l2.34 5h2.18l-2.33-5h.33c1.1046 0 2-.8954 2-2zM4 4h4v4h-4V4z"></path></svg>`;
export default svgResultCarbonIcon;
