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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M16,25.4l-8-4.7v-9.4l8-4.7l8,4.7v9.4L16,25.4z M10,19.6l6,3.5l6-3.5v-7.1l-6-3.5l-6,3.5V19.6z"></path><path d="M27,8.2L17,2.3C16.7,2.1,16.4,2,16,2s-0.7,0.1-1,0.3L5,8.2c-0.6,0.4-1,1-1,1.7v12.2c0,0.7,0.4,1.4,1,1.7l10,5.9	c0.3,0.2,0.7,0.3,1,0.3s0.7-0.1,1-0.3l10-5.9c0.6-0.4,1-1,1-1.7V9.9C28,9.2,27.6,8.5,27,8.2z M26,22.1L16,28L6,22.1V9.9L16,4l10,5.9	V22.1z"></path></svg>`;
export default svgResultCarbonIcon;
