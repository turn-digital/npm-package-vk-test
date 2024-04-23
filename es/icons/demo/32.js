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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M20 2L20 14 30 8 20 2z"></path><path d="m28,14v8H4V6h10v-2H4c-1.1045,0-2,.8955-2,2v16c0,1.1045.8955,2,2,2h8v4h-4v2h16v-2h-4v-4h8c1.1046,0,2-.8955,2-2v-8h-2Zm-10,14h-4v-4h4v4Z"></path></svg>`;
export default svgResultCarbonIcon;
