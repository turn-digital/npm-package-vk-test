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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M22,4V7H10V4H2v8h8V9h7.0234A4.9463,4.9463,0,0,0,16,12v8A3.0037,3.0037,0,0,1,13,23H10V20H2v8h8V25H13A5.0062,5.0062,0,0,0,18,20V12a2.9982,2.9982,0,0,1,2.9971-3H22v3h8V4ZM8,10H4V6H8ZM8,26H4V22H8ZM28,10H24V6h4Z"></path></svg>`;
export default svgResultCarbonIcon;
