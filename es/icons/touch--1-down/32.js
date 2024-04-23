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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M20,24H18A5,5,0,0,1,8,24H6a7,7,0,0,0,14,0Z"></path><path d="M28,14V8a7.0085,7.0085,0,0,0-7-7H16a6.1457,6.1457,0,0,0-4.1055,1.5664L3.8833,9.874a2.9986,2.9986,0,0,0,3.881,4.55l.0008.0012L10,12.8955V24a3,3,0,0,0,6,0h0l0-5.1843a2.939,2.939,0,0,0,3.5294-1.2171A2.963,2.963,0,0,0,21,18a2.9936,2.9936,0,0,0,2.5292-1.4014A2.963,2.963,0,0,0,25,17,3.0033,3.0033,0,0,0,28,14Zm-2,0a1,1,0,0,1-2,0V13H22v2a1,1,0,0,1-2,0V13H18v3a1,1,0,0,1-2,0V13H14V24h.0005A1,1,0,0,1,12,24V9.1045L6.6,12.8008a.9993.9993,0,0,1-1.3081-1.5044l7.9507-7.2515A4.1483,4.1483,0,0,1,16,3h5a5.0059,5.0059,0,0,1,5,5Z"></path></svg>`;
export default svgResultCarbonIcon;