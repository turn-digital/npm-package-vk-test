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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M29.39,16.08,22.7,13.21,20.16,8.87l-.08-.12A2,2,0,0,0,18.52,8h-8a2,2,0,0,0-1.67.89L5.46,14H3a1,1,0,0,0-1,1v9a1,1,0,0,0,1,1H5.14a4,4,0,0,0,7.72,0h6.28a4,4,0,0,0,7.72,0H29a1,1,0,0,0,1-1V17A1,1,0,0,0,29.39,16.08ZM9,26a2,2,0,1,1,2-2A2,2,0,0,1,9,26Zm14,0a2,2,0,1,1,2-2A2,2,0,0,1,23,26Zm5-3H26.86a4,4,0,0,0-7.72,0H12.86a4,4,0,0,0-7.72,0H4V16H6a1,1,0,0,0,.83-.45L10.54,10h8l2.63,4.5a1,1,0,0,0,.47.42L28,17.66Z"></path></svg>`;
export default svgResultCarbonIcon;
