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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M25.82,10H30V8H25.82a3,3,0,0,0-5.64,0H13V5H5V8H2v2H5v3h8V10h7.18A3,3,0,0,0,22,11.82v7.32A4,4,0,0,0,19.14,22H2v2H19.14a4,4,0,0,0,7.72,0H30V22H26.86A4,4,0,0,0,24,19.14V11.82A3,3,0,0,0,25.82,10ZM11,11H7V7h4ZM25,23a2,2,0,1,1-2-2A2,2,0,0,1,25,23Z"></path></svg>`;
export default svgResultCarbonIcon;
