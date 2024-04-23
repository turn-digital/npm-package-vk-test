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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M23.5 22H8.5A6.5 6.5 0 017.2 9.14a9 9 0 0117.6 0A6.5 6.5 0 0123.5 22zM16 4a7 7 0 00-6.94 6.14L9 11 8.14 11a4.5 4.5 0 00.36 9h15a4.5 4.5 0 00.36-9L23 11l-.1-.82A7 7 0 0016 4zM12 25.05L10.95 24 9.5 25.45 8.05 24 7 25.05 8.45 26.5 7 27.95 8.05 29 9.5 27.55 10.95 29 12 27.95 10.55 26.5 12 25.05zM26 25.05L24.95 24 23.5 25.45 22.05 24 21 25.05 22.45 26.5 21 27.95 22.05 29 23.5 27.55 24.95 29 26 27.95 24.55 26.5 26 25.05zM19 27.05L17.95 26 16.5 27.45 15.05 26 14 27.05 15.45 28.5 14 29.95 15.05 31 16.5 29.55 17.95 31 19 29.95 17.55 28.5 19 27.05z"></path></svg>`;
export default svgResultCarbonIcon;