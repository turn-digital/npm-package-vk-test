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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="m28,12h-8v2h8v14h-8v2h8c1.1025,0,2-.897,2-2v-14c0-1.1025-.8975-2-2-2Z"></path><path d="m19,16l-1.4141,1.4141,2.5859,2.5859h-4.1719c-2.2056,0-4-1.7944-4-4v-2h-2v2c0,3.3086,2.6917,6,6,6h4.1719l-2.5859,2.5859,1.4141,1.4141,5-5-5-5Z"></path><path d="m12,28h-6V8h16v-4c0-1.103-.8975-2-2-2H6c-1.103,0-2,.897-2,2v24c0,1.1025.897,2,2,2h6v-2ZM6,4h14v2H6v-2Z"></path></svg>`;
export default svgResultCarbonIcon;
