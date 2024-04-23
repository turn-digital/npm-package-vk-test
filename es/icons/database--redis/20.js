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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M25.7156 22h-.115a3.371 3.371 0 01-3.3113 2.2764c-3.0124 0-4.6912-2.2764-4.6912-6.3006 0-4.0012 1.6788-6.2546 4.6912-6.2546a3.3049 3.3049 0 013.3113 2.2534h.115v-6.99h2.9433V24H25.7156zm0-2.1157V16.0667c0-1.1727-1.0808-1.9314-2.4837-1.9314A2.556 2.556 0 0020.68 16.9636v2.07a2.5365 2.5365 0 002.5522 2.8052C24.6348 21.8384 25.7156 21.1257 25.7156 19.8838zM6.5576 24H3.5222V7.95h7.2434c2.92 0 4.7371 1.9316 4.7371 4.967a4.4237 4.4237 0 01-2.9893 4.553L15.8018 24h-3.38L9.4321 17.8145H6.5576zm3.9092-8.738a1.6888 1.6888 0 001.8855-1.8167V12.3875a1.6722 1.6722 0 00-1.8855-1.7935H6.5576v4.668z"></path></svg>`;
export default svgResultCarbonIcon;