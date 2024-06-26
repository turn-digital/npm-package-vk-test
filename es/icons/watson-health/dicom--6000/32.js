/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { svg } from 'lit';
import spread from '../../../globals/directives/spread';
const svgResultCarbonIcon = ({ children, ...attrs } = {}) =>
  svg`<svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" ...="${spread(
    attrs
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M13 11H7a3 3 0 00-3 3v2H6V14a1 1 0 011-1h6a1 1 0 011 1v2h2V14A3 3 0 0013 11zM10 10A4 4 0 106 6 4 4 0 0010 10zm0-6A2 2 0 118 6 2 2 0 0110 4zM20 4H30V6H20zM20 8H30V10H20zM20 12H26V14H20zM5 30H3a2 2 0 01-2-2V22a2 2 0 012-2H6v2H3v2H5a2 2 0 012 2v2A2 2 0 015 30zM3 26v2H5V26zM13 30H11a2 2 0 01-2-2V22a2 2 0 012-2h2a2 2 0 012 2v6A2 2 0 0113 30zm-2-8v6h2V22zM21 30H19a2 2 0 01-2-2V22a2 2 0 012-2h2a2 2 0 012 2v6A2 2 0 0121 30zm-2-8v6h2V22zM29 30H27a2 2 0 01-2-2V22a2 2 0 012-2h2a2 2 0 012 2v6A2 2 0 0129 30zm-2-8v6h2V22z"></path></svg>`;
export default svgResultCarbonIcon;
