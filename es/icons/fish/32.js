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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<circle cx="24" cy="7" r="1"></circle><path d="M26,2A16.0183,16.0183,0,0,0,10,18v2H3a1,1,0,0,0-.707,1.707l8,8A1,1,0,0,0,12,29V22h2A16.0183,16.0183,0,0,0,30,6V2ZM10,26.5857,5.4141,22H10ZM12,20V18a13.9394,13.9394,0,0,1,3.908-9.6777l7.77,7.7695A13.94,13.94,0,0,1,14,20ZM28,6a13.9163,13.9163,0,0,1-2.98,8.6055L17.3945,6.98A13.9163,13.9163,0,0,1,26,4h2Z"></path></svg>`;
export default svgResultCarbonIcon;
