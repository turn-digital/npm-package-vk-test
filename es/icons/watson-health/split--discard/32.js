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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M28,16A12.01,12.01,0,0,0,17,4.0508V2H15V4.0508a11.99,11.99,0,0,0,0,23.8984V30h2V27.9492A12.01,12.01,0,0,0,28,16ZM16,26V6a10,10,0,0,1,0,20Z"></path></svg>`;
export default svgResultCarbonIcon;
