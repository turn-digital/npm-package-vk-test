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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<switch ><g ><path d="M24.6 24.4L27.2 27 27.2 27 24.6 29.6 26 31 30 27 26 23zM22.4 24.4L19.8 27 19.8 27 22.4 29.6 21 31 17 27 21 23z"></path><circle cx="11" cy="8" r="1"></circle><circle cx="11" cy="16" r="1"></circle><circle cx="11" cy="24" r="1"></circle><path d="M24,3H8C6.9,3,6,3.9,6,5v22c0,1.1,0.9,2,2,2h7v-2H8v-6h18V5C26,3.9,25.1,3,24,3z M24,19H8v-6h16V19z M24,11H8V5h16V11z"></path></g></switch></svg>`;
export default svgResultCarbonIcon;
