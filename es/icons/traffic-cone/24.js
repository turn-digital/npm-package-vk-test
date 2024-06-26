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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M24.7957,28,18.9746,2.7754A1,1,0,0,0,18,2H14a1,1,0,0,0-.9746.7754L7.2043,28H4v2H28V28ZM19.9736,16H12.0264l.9229-4h6.1014Zm.4616,2,.923,4H10.6418l.923-4Zm-5.64-14h2.4092l1.3845,6H13.4109ZM10.18,24H21.82l.923,4H9.2573Z"></path></svg>`;
export default svgResultCarbonIcon;
