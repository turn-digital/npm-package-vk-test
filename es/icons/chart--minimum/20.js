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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M4,28V26H6V24H4V2H2V28a2,2,0,0,0,2,2H30V28Z"></path><path d="M8 24H10V26H8zM12 24H14V26H12zM20 24H22V26H20zM24 24H26V26H24zM28 24H30V26H28z"></path><path d="M27.9463,4.3281,25.9727,4C23.9487,16.1084,21.0137,22,17,22S10.0513,16.1084,8.0271,4l-1.9734.3281C7.51,13.0566,9.9631,22.93,16,23.9131V26h2V23.9131C24.0371,22.93,26.4907,13.0566,27.9463,4.3281Z"></path></svg>`;
export default svgResultCarbonIcon;
