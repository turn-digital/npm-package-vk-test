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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M17.713 13.471L19.576 6.518 17.645 6 16.08 11.838 17.713 13.471zM24.207 19.965L25.621 21.379 31 16 24 9 22.586 10.414 28.172 16 24.207 19.965zM30 28.586L3.414 2 2 3.414 7.793 9.207 1 16 8 23 9.414 21.586 3.828 16 9.207 10.621 14.884 16.298 12.423 25.482 14.355 26 16.517 17.931 28.586 30 30 28.586z"></path></svg>`;
export default svgResultCarbonIcon;
