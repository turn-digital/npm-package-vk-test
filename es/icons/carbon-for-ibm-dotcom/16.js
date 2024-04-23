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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M29.509,17.689l-6-3.55C23.352,14.046,23.176,14,23,14s-0.352,0.046-0.509,0.14l-6,3.55C16.187,17.869,16,18.196,16,18.55	v6.9c0,0.354,0.187,0.681,0.491,0.86l6,3.55C22.648,29.954,22.824,30,23,30s0.352-0.046,0.509-0.14l6-3.55	C29.813,26.131,30,25.804,30,25.45v-6.9C30,18.196,29.813,17.869,29.509,17.689z M28,24.88l-5,2.958l-5-2.958v-5.76l5-2.958l5,2.958	V24.88z"></path><circle cx="6" cy="6" r="1"></circle><circle cx="9" cy="6" r="1"></circle><path d="M28,2H4C2.897,2,2,2.897,2,4v20c0,1.103,0.897,2,2,2h9v-2H4V10h24v4h2V4C30,2.897,29.103,2,28,2z M4,8V4h24v4H4z"></path></svg>`;
export default svgResultCarbonIcon;
