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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M5 25a2 2 0 102 2A2.0059 2.0059 0 005 25zM16 25a2 2 0 102 2A2.0059 2.0059 0 0016 25zM27 25a2 2 0 102 2A2.0059 2.0059 0 0027 25zM28 23H26V11a2.0059 2.0059 0 00-2-2H22V7h2a4.0118 4.0118 0 014 4zM15 12H17V23H15zM6 23H4V11A4.0118 4.0118 0 018 7h2V9H8a2.0059 2.0059 0 00-2 2zM16 2L14.7 4.6343l-2.9057.42 2.1029 2.0514L13.4 10 16 8.6343 18.6 10l-.4972-2.8943 2.1029-2.0486L17.3 4.6343z"></path></svg>`;
export default svgResultCarbonIcon;
