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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<circle cx="12" cy="21" r="1"></circle><path d="m23,25h-14c-1.1028,0-2-.8972-2-2v-4c0-1.1028.8972-2,2-2h14c1.1028,0,2,.8972,2,2v4c0,1.1028-.8972,2-2,2Zm-14-6v4h14v-4h-14Z"></path><circle cx="12" cy="11" r="1"></circle><path d="m23,15h-14c-1.1028,0-2-.8972-2-2v-4c0-1.1028.8972-2,2-2h14c1.1028,0,2,.8972,2,2v4c0,1.1028-.8972,2-2,2Zm-14-6v4h14v-4h-14Z"></path><path d="m28,30H4c-1.103,0-2-.897-2-2v-12h2v12h24V4h-12v-2h12c1.103,0,2,.897,2,2v24c0,1.103-.897,2-2,2Z"></path><path d="M8.5 1.5H13.5V3.5H8.5z" transform="rotate(90 11 2.5)"></path><path d="M1.975 3.475H6.975V5.475H1.975z" transform="rotate(45 4.475 4.475)"></path><path d="M0 10H5V12H0z"></path></svg>`;
export default svgResultCarbonIcon;
