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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 24 24">${children}<path d="M20.8,7L17,3.2C16.9,3.1,16.7,3,16.5,3h-12C3.7,3,3,3.7,3,4.5v15C3,20.3,3.7,21,4.5,21h15c0.8,0,1.5-0.7,1.5-1.5v-12	C21,7.3,20.9,7.1,20.8,7z M9,4.5h6v3H9V4.5z M15,19.5H9v-6h6V19.5z M16.5,19.5v-6c0-0.8-0.7-1.5-1.5-1.5H9c-0.8,0-1.5,0.7-1.5,1.5v6	h-3v-15h3v3C7.5,8.3,8.2,9,9,9h6c0.8,0,1.5-0.7,1.5-1.5V4.8l3,3v11.7H16.5z"></path></svg>`;
export default svgResultCarbonIcon;
