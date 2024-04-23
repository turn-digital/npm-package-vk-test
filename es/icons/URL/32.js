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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path stroke-width="0" d="M24 21L24 9 22 9 22 23 30 23 30 21 24 21zM20 15v-4c0-1.103-.8975-2-2-2h-6v14h2v-6h1.4807l2.3345 6h2.1453l-2.3331-6h.3726c1.1025 0 2-.8975 2-2zm-6-4h4v4h-4v-4zM8 23h-4c-1.103 0-2-.8975-2-2v-12h2v12h4v-12h2v12c0 1.1025-.897 2-2 2z"></path></svg>`;
export default svgResultCarbonIcon;
