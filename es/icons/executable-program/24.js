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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path fill-rule="evenodd" d="M25 21L32 26 25 31 25 21z"></path><path d="M20.17 19L17.58 21.59 19 23 23 19 19 15 17.58 16.41 20.17 19zM11.83 19L14.42 16.41 13 15 9 19 13 23 14.42 21.59 11.83 19z"></path><circle cx="9" cy="8" r="1"></circle><circle cx="6" cy="8" r="1"></circle><path d="M21,26H4V12H28v7h2V6c0-1.1025-.8972-2-2-2H4c-1.1028,0-2,.8975-2,2V26c0,1.1025,.8972,2,2,2H21v-2ZM4,6H28v4H4V6Z"></path></svg>`;
export default svgResultCarbonIcon;
