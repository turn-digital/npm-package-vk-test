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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M30,8V6H8V8H18v4H4V8H2v8H4V14h6.2192l2.0533,8.2129A4.9923,4.9923,0,0,0,17.123,26H26a4.0045,4.0045,0,0,0,4-4V19.3623a2.0007,2.0007,0,0,0-.4639-1.28L25.0684,12.72A1.9968,1.9968,0,0,0,23.5317,12H20V8ZM26,24H17.123a2.9949,2.9949,0,0,1-2.91-2.2725L12.2808,14H18v6H28v2A2.0023,2.0023,0,0,1,26,24ZM23.5317,14l3.3333,4H20V14Z"></path></svg>`;
export default svgResultCarbonIcon;
