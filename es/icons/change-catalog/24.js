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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M24 24v2h2.4592A5.94 5.94 0 0122 28a6.0066 6.0066 0 01-6-6H14a7.9841 7.9841 0 0014 5.2651V30h2V24zM22 14a8.04 8.04 0 00-6 2.7349V14H14v6h6V18H17.5408A5.94 5.94 0 0122 16a6.0066 6.0066 0 016 6h2A8.0092 8.0092 0 0022 14z"></path><path d="M12,28H6V24H8V22H6V17H8V15H6V10H8V8H6V4H24v8h2V4a2,2,0,0,0-2-2H6A2,2,0,0,0,4,4V8H2v2H4v5H2v2H4v5H2v2H4v4a2,2,0,0,0,2,2h6Z"></path></svg>`;
export default svgResultCarbonIcon;
