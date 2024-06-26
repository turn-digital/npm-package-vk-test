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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M23,6V16h5a1,1,0,0,1,.707,1.707l-12,12a.9994.9994,0,0,1-1.414,0l-12-12A1,1,0,0,1,4,16H9V6a2.0023,2.0023,0,0,1,2-2H21A2.0027,2.0027,0,0,1,23,6ZM16,27.5859,25.5859,18H21V6H11V18H6.4141Z"></path></svg>`;
export default svgResultCarbonIcon;
