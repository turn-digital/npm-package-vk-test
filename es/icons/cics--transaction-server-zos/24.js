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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<circle cx="28" cy="10" r="2"></circle><path d="M18,29h-7v-2h7c4.9626,0,9-4.0374,9-9v-4h2v4c0,6.0654-4.9346,11-11,11Z"></path><path d="M16,21c-2.7571,0-5-2.2429-5-5s2.2429-5,5-5,5,2.2429,5,5-2.2429,5-5,5Zm0-8c-1.6543,0-3,1.3457-3,3s1.3457,3,3,3,3-1.3457,3-3-1.3457-3-3-3Z"></path><circle cx="4" cy="22" r="2"></circle><path d="M5,18H3v-4C3,7.9346,7.9346,3,14,3h7v2h-7c-4.9626,0-9,4.0374-9,9v4Z"></path></svg>`;
export default svgResultCarbonIcon;
