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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path fill="none" d="M28 9L28 7 25 7 25 5 23 5 23 7 20 7 20 9 23 9 23 12 20 12 20 14 23 14 23 16 25 16 25 14 28 14 28 12 25 12 25 9 28 9z"></path><path d="M31 3H17a1 1 0 00-1 1V17a1 1 0 001 1H31a1 1 0 001-1V4A1 1 0 0031 3zM28 9H25v3h3v2H25v2H23V14H20V12h3V9H20V7h3V5h2V7h3zM15 30H13V26a2.9465 2.9465 0 00-3-3H6a2.9465 2.9465 0 00-3 3v4H1V26a4.9514 4.9514 0 015-5h4a4.9514 4.9514 0 015 5zM8 11a3 3 0 010 6 3 3 0 010-6M8 9A5 5 0 008 19 5 5 0 008 9z"></path></svg>`;
export default svgResultCarbonIcon;
