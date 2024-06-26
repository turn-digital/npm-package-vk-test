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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<circle cx="16" cy="13.5" r="1.5"></circle><path d="M19.5356,10.4648a5,5,0,0,0-7.0717,0L11.05,9.0508a6.9992,6.9992,0,0,1,9.9,0Z"></path><path d="M23.0713 6.929a10 10 0 00-14.1426 0L7.5146 5.5144a12.0011 12.0011 0 0116.9708 0zM21 25L16 30 11 25 12.409 23.581 15 26.153 15 19 17 19 17 26.206 19.591 23.581 21 25zM24 11L19 16 24 21 25.419 19.591 22.847 17 30 17 30 15 22.794 15 25.419 12.409 24 11zM8 11L13 16 8 21 6.581 19.591 9.153 17 2 17 2 15 9.206 15 6.581 12.409 8 11z"></path></svg>`;
export default svgResultCarbonIcon;
