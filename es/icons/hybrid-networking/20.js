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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M17,24.1836V20H15v4.1836a3,3,0,1,0,2,0Z"></path><path d="M26,12a3.9962,3.9962,0,0,0-3.8579,3H9.8579a4,4,0,1,0,0,2H22.1421A3.9934,3.9934,0,1,0,26,12ZM6,18a2,2,0,1,1,2-2A2.0025,2.0025,0,0,1,6,18Zm20,0a2,2,0,1,1,2-2A2.0025,2.0025,0,0,1,26,18Z"></path><path d="M19,5a3,3,0,1,0-4,2.8164V12h2V7.8164A2.9917,2.9917,0,0,0,19,5Z"></path></svg>`;
export default svgResultCarbonIcon;
