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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<switch ><g ><path d="m11 21-4-2.2v-4.5l4-2.2 4 2.2v4.5L11 21zm-2-3.4 2 1.1 2-1.1v-2.2l-2-1.1-2 1.1v2.2zM6 30l-4-2.2v-4.5L6 21l4 2.2v4.5L6 30zm-2-3.4 2 1.1 2-1.1v-2.2l-2-1.1-2 1.1v2.2zM16 30l-4-2.2v-4.5l4-2.2 4 2.2v4.5L16 30zm-2-3.4 2 1.1 2-1.1v-2.2l-2-1.1-2 1.1v2.2zM26 30l-4-2.2v-4.5l4-2.2 4 2.2v4.5L26 30zm-2-3.4 2 1.1 2-1.1v-2.2l-2-1.1-2 1.1v2.2zM24.6 11.6 22 14.2V9.4l3-1.7V3.2L21 1l-4 2.2v4.5l3 1.7v4.7l-2.6-2.6L16 13l5 5 5-5-1.4-1.4zM19 4.4l2-1.1 2 1.1v2.2l-2 1.1-2-1.1V4.4z"></path><path fill="none" d="M0 0h32v32H0z"></path></g></switch></svg>`;
export default svgResultCarbonIcon;
