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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M23.1,16l6.3-6.3c0.8-0.8,0.8-2,0-2.8l-4.2-4.2c-0.8-0.8-2-0.8-2.8,0L16,8.9L9.7,2.6c-0.8-0.8-2-0.8-2.8,0L2.6,6.8	c-0.8,0.8-0.8,2,0,2.8L8.9,16L2,22.9V30h7.1l6.9-6.9l6.3,6.3c0.8,0.8,2,0.8,2.8,0l4.2-4.2c0.8-0.8,0.8-2,0-2.8L23.1,16z M23.8,4	L28,8.2l-6.3,6.3l-4.2-4.2L23.8,4z M8.2,28H4v-4.2l6.3-6.3l4.2,4.2L8.2,28z M23.8,28L4,8.2L8.2,4l3.5,3.5L9.6,9.6l1.4,1.4l2.1-2.1	l4.2,4.2l-2.1,2.1l1.4,1.4l2.1-2.1l4.2,4.2L21,20.9l1.4,1.4l2.1-2.1l3.5,3.5L23.8,28z"></path></svg>`;
export default svgResultCarbonIcon;
