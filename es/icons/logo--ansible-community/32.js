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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M27.8,27.7L17.5,3.1C17.2,2.4,16.6,2,15.9,2c-0.7,0-1.3,0.4-1.6,1.1L3,30h3.9l4.5-11.1l13.3,10.7c0.5,0.4,0.9,0.6,1.4,0.6	c1,0,1.9-0.7,1.9-1.8C28,28.2,27.9,28,27.8,27.7z M15.9,7.5l6.7,16.4L12.5,16L15.9,7.5z"></path></svg>`;
export default svgResultCarbonIcon;
