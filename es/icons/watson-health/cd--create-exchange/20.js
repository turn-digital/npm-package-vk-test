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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<circle cx="14" cy="14" r="2"></circle><path d="M14,2a12,12,0,0,0,0,24V24A10,10,0,1,1,24,14,8.27,8.27,0,0,1,24,15h2c0-.33.05-.66.05-1A12,12,0,0,0,14,2Z"></path><path d="M17 24L26.17 24 23.58 26.59 25 28 30 23 25 18 23.58 19.42 26.17 22 17 22 17 24zM14 20a6 6 0 116-6A6 6 0 0114 20zm0-10a4 4 0 104 4A4 4 0 0014 10z"></path></svg>`;
export default svgResultCarbonIcon;
