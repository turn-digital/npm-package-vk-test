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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M28,2H4A2,2,0,0,0,2,4V28a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V4A2,2,0,0,0,28,2ZM19,18l-1.4141-1.4141L22.1719,12H10V26H8V12a2,2,0,0,1,2-2H22.1719l-4.586-4.5859L19,4l7,7Z"></path><path fill="none" d="M19,18l-1.4141-1.4141L22.1719,12H10V26H8V12a2,2,0,0,1,2-2H22.1719l-4.586-4.5859L19,4l7,7Z" data-icon-path="inner-path"></path></svg>`;
export default svgResultCarbonIcon;
