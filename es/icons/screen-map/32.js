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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M22 25H30V27H22zM22 21H30V23H22zM18.4141 11L23 11 23 9 15 9 15 17 17 17 17 12.4141 23.5859 19 25 17.5859 18.4141 11z"></path><path d="M28,3H4c-1.1028,0-2,.8975-2,2V21c0,1.1025,.8972,2,2,2H12v4h-4v2h12v-8H4V5H28v14h2V5c0-1.1025-.8972-2-2-2Zm-10,24h-4v-4h4v4Z"></path></svg>`;
export default svgResultCarbonIcon;
