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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M3.6 22.5c-1-2-1.6-4.2-1.6-6.5C2 8.3 8.3 2 16 2v2C9.4 4 4 9.4 4 16c0 2 .5 3.8 1.4 5.5L3.6 22.5zM28 16c0 6.6-5.4 12-12 12-2.9 0-5.6-1-7.7-2.8l5.7-5.7L12.6 18l-6.5 6.5c-.4.4-.4 1 0 1.4C8.7 28.5 12.3 30 16 30c7.7 0 14-6.3 14-14H28z"></path><path d="M18,25c-0.1,0-0.3,0-0.4-0.1c-0.3-0.1-0.6-0.4-0.6-0.8l-0.7-5l2-0.3l0.4,3.3l2.2-1.7V15c0-0.3,0.1-0.5,0.3-0.7l3.2-3.2	c0.9-0.9,1.5-2.2,1.5-3.5V6l-1.5,0c-1.3,0-2.6,0.5-3.5,1.5l-3.2,3.2C17.5,10.9,17.3,11,17,11h-5.5l-1.7,2.2l3.3,0.4l-0.3,2l-5-0.7	c-0.4,0-0.7-0.3-0.8-0.6s-0.1-0.7,0.1-1l3-4C10.4,9.1,10.7,9,11,9h5.6l3-3c1.3-1.3,3.1-2,4.9-2H26c1.1,0,2,0.9,2,2v1.5	c0,1.9-0.7,3.6-2,4.9l-3,3V21c0,0.3-0.1,0.6-0.4,0.8l-4,3C18.4,24.9,18.2,25,18,25z"></path></svg>`;
export default svgResultCarbonIcon;
