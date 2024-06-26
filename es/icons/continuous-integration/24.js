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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M31.9,15.5l-5.7-10C25.9,5.2,25.6,5,25.3,5H6.7C6.4,5,6.1,5.2,5.9,5.5l-5.7,10C0,15.7,0,15.8,0,16s0,0.3,0.1,0.5l5.7,10	C6.1,26.8,6.4,27,6.7,27h18.5c0.4,0,0.7-0.2,0.9-0.5l5.7-10C32,16.3,32,16.2,32,16S32,15.7,31.9,15.5z M17.8,15h-8l4-7L17.8,15z M15.5,7h8l-4,7L15.5,7z M17.8,17l-4,7l-4-7H17.8z M19.5,18l4,7h-8L19.5,18z M21.2,17h8l-4,7L21.2,17z M21.2,15l4-7l4,7H21.2z M7.3,7H12l-4.6,8H2.7L7.3,7z M7.3,25l-4.6-8h4.7l4.6,8H7.3z"></path></svg>`;
export default svgResultCarbonIcon;
