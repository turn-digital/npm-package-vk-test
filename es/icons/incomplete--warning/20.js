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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M14 26A12 12 0 0114 2zM17.8257 4.7642a10.0288 10.0288 0 013.2422 2.1679l1.4133-1.4135a12.0359 12.0359 0 00-3.89-2.6016zM26 14a11.93 11.93 0 00-.9167-4.5908l-1.8472.7651A9.9428 9.9428 0 0124 14zM27.38 28H20.6178L24 21.2358zM24 18a1 1 0 00-.8947.5527l-5 10A1.0005 1.0005 0 0019 30H29a1 1 0 00.9214-1.3892L24.8946 18.5527A1 1 0 0024 18z"></path></svg>`;
export default svgResultCarbonIcon;
