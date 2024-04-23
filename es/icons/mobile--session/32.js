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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="m24,18c-3.3083,0-6,2.6914-6,6s2.6917,6,6,6,6-2.6914,6-6-2.6917-6-6-6Zm0,10c-2.2056,0-4-1.7944-4-4s1.7944-4,4-4v4h4c0,2.2056-1.7944,4-4,4Z"></path><path d="m16,28h-7V8h14v7h2V4c0-1.103-.8975-2-2-2h-14c-1.103,0-2,.897-2,2v24c0,1.1025.897,2,2,2h7v-2ZM9,4h14v2h-14v-2Z"></path></svg>`;
export default svgResultCarbonIcon;
