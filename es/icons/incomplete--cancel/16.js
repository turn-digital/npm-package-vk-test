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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M30 21.41L28.59 20 25 23.59 21.41 20 20 21.41 23.59 25 20 28.59 21.41 30 25 26.41 28.59 30 30 28.59 26.41 25 30 21.41zM14 26A12 12 0 0114 2zM17.8257 4.7642a10.0288 10.0288 0 013.2422 2.1679l1.4133-1.4135a12.0359 12.0359 0 00-3.89-2.6016zM26 14a11.93 11.93 0 00-.9167-4.5908l-1.8472.7651A9.9428 9.9428 0 0124 14z"></path></svg>`;
export default svgResultCarbonIcon;
