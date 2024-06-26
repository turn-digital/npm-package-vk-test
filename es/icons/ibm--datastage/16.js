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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M27 22.1V13h-2v9.1c-1.4.4-2.5 1.5-2.9 2.9H13v2h9.1c.4 1.7 2 3 3.9 3 2.2 0 4-1.8 4-4C30 24.1 28.7 22.6 27 22.1zM26 28c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2S27.1 28 26 28zM10 30H2v-8h8V30zM4 28h4v-4H4V28zM9.9 7H19V5H9.9C9.4 3.3 7.9 2 6 2 3.8 2 2 3.8 2 6c0 1.9 1.3 3.4 3 3.9V19h2V9.9C8.4 9.5 9.5 8.4 9.9 7zM6 8C4.9 8 4 7.1 4 6s.9-2 2-2 2 .9 2 2S7.1 8 6 8z"></path><path d="M22 2L22 4 26.6 4 11 19.6 12.4 21 28 5.4 28 10 30 10 30 2z"></path></svg>`;
export default svgResultCarbonIcon;
