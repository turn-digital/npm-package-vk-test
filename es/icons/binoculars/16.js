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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M28,8V5a1,1,0,0,0-1-1H21a1,1,0,0,0-1,1V8a2,2,0,0,0-2,2v2H14V10a2,2,0,0,0-2-2V5a1,1,0,0,0-1-1H5A1,1,0,0,0,4,5V8a2,2,0,0,0-2,2V22a2,2,0,0,0,1,1.72V27a1,1,0,0,0,1,1h8a1,1,0,0,0,1-1V23.72A2,2,0,0,0,14,22V20h4v2a2,2,0,0,0,1,1.72V27a1,1,0,0,0,1,1h8a1,1,0,0,0,1-1V23.72A2,2,0,0,0,30,22V10A2,2,0,0,0,28,8ZM11,26H5V24h6Zm1-4H4V10H6V6h4v4h2Zm2-4V14h4v4Zm13,8H21V24h6Zm1-4H20V10h2V6h4v4h2Z"></path></svg>`;
export default svgResultCarbonIcon;
