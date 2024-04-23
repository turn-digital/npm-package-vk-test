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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<circle cx="16" cy="16" r="2"></circle><path d="M30,6a2.0023,2.0023,0,0,0-2-2H4A2.0023,2.0023,0,0,0,2,6V26a2.0023,2.0023,0,0,0,2,2H28a2.0023,2.0023,0,0,0,2-2Zm-2,6.9258L22.9636,6H28ZM27.7637,16,20.491,26H11.509L4.2363,16,11.509,6h8.982ZM9.0364,6,4,12.9248V6ZM4,19.0752,9.0364,26H4ZM22.9636,26l5.0374-6.9263L28,26Z"></path></svg>`;
export default svgResultCarbonIcon;
