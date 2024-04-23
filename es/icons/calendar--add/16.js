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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<switch ><g ><path d="M30 22L24 22 24 16 22 16 22 22 16 22 16 24 22 24 22 30 24 30 24 24 30 24z"></path><path d="M28,6c0-1.1-0.9-2-2-2h-4V2h-2v2h-8V2h-2v2H6C4.9,4,4,4.9,4,6v20c0,1.1,0.9,2,2,2h8v-2H6V6h4v2h2V6h8v2h2V6h4v8h2V6z"></path></g></switch></svg>`;
export default svgResultCarbonIcon;
