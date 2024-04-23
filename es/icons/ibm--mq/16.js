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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M22.5,28.4l-0.9-1.8c4-2.1,6.5-6.2,6.5-10.6c0-6.6-5.4-12-12-12c-1.3,0-2.5,0.2-3.7,0.6l-0.6-1.9C13.1,2.2,14.5,2,16,2	c7.7,0,14,6.3,14,14C30,21.2,27.1,26,22.5,28.4z"></path><path d="M20.5 23.8l-1-1.7c2.2-1.2 3.5-3.6 3.5-6.1 0-3.9-3.1-7-7-7-.6 0-1.2.1-1.8.2l-.5-1.9C14.5 7.1 15.2 7 16 7c5 0 9 4 9 9C25 19.2 23.3 22.2 20.5 23.8zM9.5 28.4C4.9 26 2 21.2 2 16c0-1.5.2-2.9.7-4.3l1.9.6C4.2 13.5 4 14.7 4 16c0 4.5 2.5 8.6 6.5 10.6L9.5 28.4z"></path><path d="M11.5,23.8C8.7,22.2,7,19.2,7,16c0-0.8,0.1-1.5,0.3-2.2l1.9,0.5C9.1,14.8,9,15.4,9,16c0,2.5,1.3,4.8,3.5,6.1L11.5,23.8z"></path><path d="M20,16c0-2.2-1.8-4-4-4c-0.7,0-1.4,0.2-2,0.6L8.9,7.5C9,7.3,9,7.2,9,7c0-1.1-0.9-2-2-2S5,5.9,5,7s0.9,2,2,2	c0.2,0,0.3,0,0.5-0.1l5.1,5.1c-0.4,0.6-0.6,1.3-0.6,2c0,1.9,1.3,3.4,3,3.9v7.4c-0.6,0.3-1,1-1,1.7c0,1.1,0.9,2,2,2s2-0.9,2-2	c0-0.7-0.4-1.4-1-1.7v-7.4C18.7,19.4,20,17.9,20,16z M16,18c-1.1,0-2-0.9-2-2s0.9-2,2-2s2,0.9,2,2S17.1,18,16,18z"></path></svg>`;
export default svgResultCarbonIcon;
