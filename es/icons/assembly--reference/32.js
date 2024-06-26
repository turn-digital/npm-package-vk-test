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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M8.7 5.1H12.2V7.1H8.7z" transform="rotate(-30.582 10.48 6.101)"></path><path d="M6 12H4V9.9c0-.7.4-1.4 1-1.7l1.5-.9 1 1.7L6 9.9V12zM4 14H6V18H4zM6.5 24.7L5 23.8c-.6-.4-1-1-1-1.7V20h2v2.1L7.5 23 6.5 24.7z"></path><path d="M9.5 24.1H11.5V27.6H9.5z" transform="rotate(-59.421 10.48 25.9)"></path><path d="M17.5,27.1L16,28l-1.5-0.9l-1,1.7l1.5,0.9c0.3,0.2,0.7,0.3,1,0.3c0.4,0,0.7-0.1,1-0.3l1.5-0.9L17.5,27.1z"></path><path d="M19.8 24.9H23.3V26.9H19.8z" transform="rotate(-30.582 21.502 25.912)"></path><path d="M25.2 24.9l-1-1.7 1.8-1V20h2v2.1c0 .7-.4 1.4-1 1.7L25.2 24.9zM26 14H28V18H26zM28 12h-2V9.9l-1.8-1 1-1.7 1.8 1c.6.4 1 1 1 1.7V12z"></path><path d="M20.5 4.3H22.5V7.8H20.5z" transform="rotate(-59.421 21.501 6.089)"></path><path d="M17.5,4.9L16,4l-1.5,0.9l-1-1.7L15,2.3C15.3,2.1,15.6,2,16,2c0.4,0,0.7,0.1,1,0.3l1.5,0.9L17.5,4.9z"></path></svg>`;
export default svgResultCarbonIcon;
