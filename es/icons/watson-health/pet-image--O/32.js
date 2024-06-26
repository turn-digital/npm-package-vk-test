/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { svg } from 'lit';
import spread from '../../../globals/directives/spread';
const svgResultCarbonIcon = ({ children, ...attrs } = {}) =>
  svg`<svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" ...="${spread(
    attrs
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M11 29H13V32H11zM11 8H13V11H11zM0 19H3V21H0zM21 19H24V21H21z"></path><path d="M3.59 11.09H5.57V14.09H3.59z" transform="rotate(-45 4.585 12.59)"></path><path d="M18.44 25.93H20.42V28.93H18.44z" transform="rotate(-45 19.429 27.422)"></path><path d="M3.09 26.44H6.09V28.42H3.09z" transform="rotate(-45 4.591 27.428)"></path><path d="M17.93 11.59H20.93V13.57H17.93z" transform="rotate(-45 19.423 12.585)"></path><path d="M12 13a7 7 0 107 7A7 7 0 0012 13zm0 12a5 5 0 010-10zM2 2L9 2 9 0 0 0 0 9 2 9 2 2zM30 0H26a2 2 0 00-2 2V12a2 2 0 002 2h4a2 2 0 002-2V2A2 2 0 0030 0zM26 12V2h4V12z"></path></svg>`;
export default svgResultCarbonIcon;
