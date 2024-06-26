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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M13 19H19V21H13z"></path><path d="M25.4409,14,24.1687,9.45A2.009,2.009,0,0,0,22.2456,8H9.7544A2.0089,2.0089,0,0,0,7.8313,9.4507L6.5315,14H4v2H6v7a2.0025,2.0025,0,0,0,2,2v3h2V25H22v3h2V25a2.0025,2.0025,0,0,0,2-2V16h2V14ZM9.7544,10H22.2458l1.4285,5H8.3257ZM24,21v2H8V21h2V19H8V17H24v2H22v2Z"></path></svg>`;
export default svgResultCarbonIcon;
