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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<switch ><g ><path d="M26 21L23 21 23 18 21 18 21 21 18 21 18 23 21 23 21 26 23 26 23 23 26 23z"></path><path d="M22,30c-4.4,0-8-3.6-8-8s3.6-8,8-8s8,3.6,8,8S26.4,30,22,30z M22,16c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6-6S25.3,16,22,16z"></path><path d="M28,6c0-1.1-0.9-2-2-2h-4V2h-2v2h-8V2h-2v2H6C4.9,4,4,4.9,4,6v20c0,1.1,0.9,2,2,2h6v-2H6V6h4v2h2V6h8v2h2V6h4v6h2V6z"></path></g></switch></svg>`;
export default svgResultCarbonIcon;
