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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<circle cx="16" cy="21" r="1"></circle><path d="M28 19V15H26v2H6V15H4v4h7v4.4116L7 25.6367V30H9V26.8125L12.26 25h7.481L23 26.8125V30h2V25.6367l-4-2.2251V19zm-9 4H13V19h6zM0 11H10V13H0zM22 11H32V13H22zM16 6a5.9817 5.9817 0 00-4.2407 1.7593l1.4136 1.4136a3.9936 3.9936 0 015.6542 0l1.4136-1.4136A5.9814 5.9814 0 0016 6z"></path><path d="M8.9324,4.9321l1.4133,1.4136a7.9877,7.9877,0,0,1,11.3086,0l1.4136-1.4136a9.9844,9.9844,0,0,0-14.1355,0Z"></path></svg>`;
export default svgResultCarbonIcon;
