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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M16,23c-0.2,0-0.4,0-0.5-0.1l-5-3C10.2,19.7,10,19.4,10,19v-6c0-0.4,0.2-0.7,0.5-0.9l5-3C15.6,9,15.8,9,16,9	c0.2,0,0.4,0,0.5,0.1l5,3c0.3,0.2,0.5,0.5,0.5,0.9v6c0,0.4-0.2,0.7-0.5,0.9l-5,3C16.4,23,16.2,23,16,23z M12,18.4l4,2.4l4-2.4v-4.9	l-4-2.4l-4,2.4V18.4z"></path><path d="M16,31c-0.2,0-0.3,0-0.5-0.1l-12-7C3.2,23.7,3,23.4,3,23V9c0-0.4,0.2-0.7,0.5-0.9l12-7C15.7,1,15.8,1,16,1	c0.2,0,0.3,0,0.5,0.1l12,7l-1,1.7L16,3.2L5,9.6v12.9l11,6.4l11-6.4V15h2v8c0,0.4-0.2,0.7-0.5,0.9l-12,7C16.3,31,16.2,31,16,31z"></path></svg>`;
export default svgResultCarbonIcon;
