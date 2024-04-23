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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M6 17H14V19H6z"></path><circle cx="3" cy="18" r="1"></circle><circle cx="13" cy="14" r="1"></circle><path d="M2 13H10V15H2zM6 9H14V11H6z"></path><circle cx="3" cy="10" r="1"></circle><path d="M30,28.6l-7.4-7.4c1.5-2,2.4-4.5,2.4-7.2c0-6.6-5.4-12-12-12C9.7,2,6.6,3.3,4.3,5.8l1.5,1.4C7.6,5.1,10.2,4,13,4	c5.5,0,10,4.5,10,10s-4.5,10-10,10c-3,0-5.8-1.3-7.7-3.6l-1.5,1.3C6,24.4,9.4,26,13,26c3.2,0,6.1-1.3,8.3-3.3l7.3,7.3L30,28.6z"></path></svg>`;
export default svgResultCarbonIcon;
