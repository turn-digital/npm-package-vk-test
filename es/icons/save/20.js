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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 20 20">${children}<path d="M17.8,5.5l-3.3-3.3C14.3,2.1,14.2,2,14,2H3.3C2.6,2,2,2.6,2,3.3v13.3C2,17.4,2.6,18,3.3,18h13.3c0.7,0,1.4-0.5,1.4-1.2V6.1	C18,5.7,17.9,5.7,17.8,5.5z M7.3,3.3h5.3v3.3H7.3V3.3z M12.7,16.7H7.3v-5.3h5.3L12.7,16.7L12.7,16.7z M14,16.7v-5.3	c0-0.7-0.6-1.3-1.3-1.3H7.3C6.6,10,6,10.6,6,11.3v5.3H3.3V3.3H6v3.3C6,7.4,6.6,8,7.3,8h5.3C13.4,8,14,7.4,14,6.7v-3l2.7,2.7v10.4	L14,16.7L14,16.7z"></path></svg>`;
export default svgResultCarbonIcon;
