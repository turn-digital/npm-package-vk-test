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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M26,30H6a2.0023,2.0023,0,0,1-2-2V4A2.0023,2.0023,0,0,1,6,2H26a2.0023,2.0023,0,0,1,2,2V28A2.0023,2.0023,0,0,1,26,30ZM6,4V28H26V4Z"></path><path d="M12 18H23V20H12z" transform="rotate(-180 17.5 19)"></path><path d="M16 23H23V25H16z" transform="rotate(-180 19.5 24)"></path></svg>`;
export default svgResultCarbonIcon;