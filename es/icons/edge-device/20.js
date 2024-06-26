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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M9 21H23V23H9zM11 14a2 2 0 102 2A1.9806 1.9806 0 0011 14zM21 14a2 2 0 102 2A1.9806 1.9806 0 0021 14z"></path><path d="M28,8H18.4141l2.0722-2.0723A2.04,2.04,0,0,0,21,6a2,2,0,1,0-2-2,2.0412,2.0412,0,0,0,.0723.5137L15.5859,8H4a2.0025,2.0025,0,0,0-2,2V26a2.0025,2.0025,0,0,0,2,2H28a2.0025,2.0025,0,0,0,2-2V10A2.0025,2.0025,0,0,0,28,8ZM4,26V10H28V26Z"></path></svg>`;
export default svgResultCarbonIcon;
