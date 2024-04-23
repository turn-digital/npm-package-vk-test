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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M27,29H13c-1.1,0-2-0.9-2-2v-4h2v4h14V13h-4v-2h4c1.1,0,2,0.9,2,2v14C29,28.1,28.1,29,27,29z"></path><path d="M11 19H21V21H11zM11 15H21V17H11zM11 11H21V13H11z"></path><path d="M5,3h14c1.1,0,2,0.9,2,2v4h-2V5H5v14h4v2H5c-1.1,0-2-0.9-2-2V5C3,3.9,3.9,3,5,3z"></path></svg>`;
export default svgResultCarbonIcon;
