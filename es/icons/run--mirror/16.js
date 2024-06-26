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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M9 19L9 25 14 22z"></path><path d="M11,16c3.3,0,6,2.7,6,6s-2.7,6-6,6s-6-2.7-6-6S7.7,16,11,16 M11,14c-4.4,0-8,3.6-8,8s3.6,8,8,8s8-3.6,8-8S15.4,14,11,14	L11,14z"></path><path d="M4,6v6h22v14h-4v2h4c1.1,0,2-0.9,2-2V6c0-1.1-0.9-2-2-2H6C4.9,4,4,4.9,4,6z M6,10V6h20v4H6z"></path></svg>`;
export default svgResultCarbonIcon;
