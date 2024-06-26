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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M21 25L16 30 11 25 12.409 23.581 15 26.153 15 19 17 19 17 26.206 19.591 23.581 21 25zM24 11L19 16 24 21 25.419 19.591 22.847 17 30 17 30 15 22.794 15 25.419 12.409 24 11zM8 11L13 16 8 21 6.581 19.591 9.153 17 2 17 2 15 9.206 15 6.581 12.409 8 11zM12.4289 5.8227v1.63a1.1269 1.1269 0 01-.6767 1.026l-1.39.5967A1.1218 1.1218 0 019.14 8.8424L7.3208 7.0233a1.1165 1.1165 0 01.0125-1.579l.0348-.0328c7.393-6.527 14.6913-2.0374 17.2127-.0473a1.1166 1.1166 0 01.1746 1.5693 1.1011 1.1011 0 01-.0873.0971L22.9108 8.7878a1.1114 1.1114 0 01-1.2225.2329l-1.39-.5967a1.1112 1.1112 0 01-.68-1.0223v-1.63S15.9726 3.0648 12.4289 5.8227z"></path></svg>`;
export default svgResultCarbonIcon;
