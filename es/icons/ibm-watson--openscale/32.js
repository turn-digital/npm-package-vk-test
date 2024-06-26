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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M4 28c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3S5.7 28 4 28zM4 24c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1S4.6 24 4 24zM28 28c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3S29.7 28 28 28zM28 24c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1S28.6 24 28 24zM22.4 4.4l-.9 1.8C26.1 8.4 29 13 29 18c0 .7-.1 1.4-.2 2.1l2 .3c.1-.8.2-1.6.2-2.5C31 12.2 27.6 6.9 22.4 4.4zM16 7c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3S17.7 7 16 7zM16 3c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1S16.6 3 16 3z"></path><path d="M25.5,13.6l-1-1.7L17,16.3V9h-2v7.2L6.2,11c-0.5-0.3-1.1-0.1-1.4,0.3s-0.1,1.1,0.3,1.4L14,18l-6.2,3.6l1,1.7l6.2-3.6V30	c0,0.6,0.4,1,1,1s1-0.4,1-1V19.8l6.2,3.7l1-1.7L18,18L25.5,13.6z"></path></svg>`;
export default svgResultCarbonIcon;
