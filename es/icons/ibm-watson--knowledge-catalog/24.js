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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M23 27.2L20.4 24.6 19 26 23 30 30 23 28.6 21.6zM12 18H20V20H12zM12 13H20V15H12zM12 8H20V10H12z"></path><path d="M16,28H6v-4h2v-2H6v-5h2v-2H6v-5h2V8H6V4h18v16h2V4c0-1.1-0.9-2-2-2H6C4.9,2,4,2.9,4,4v4H2v2h2v5H2v2h2v5H2v2h2v4	c0,1.1,0.9,2,2,2h10V28z"></path></svg>`;
export default svgResultCarbonIcon;
