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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M31 25a6 6 0 10-6 6A6.0066 6.0066 0 0031 25zm-2 0a3.9521 3.9521 0 01-.5669 2.019L22.981 21.5669A3.9529 3.9529 0 0125 21 4.0045 4.0045 0 0129 25zm-8 0a3.9521 3.9521 0 01.5669-2.019l5.4521 5.4521A3.9529 3.9529 0 0125 29 4.0045 4.0045 0 0121 25zM19.59 16L17 18.59 18.42 20 22.42 16 18.42 12 17 13.41 19.59 16zM10.41 16L13 13.41 11.58 12 7.58 16 11.58 20 13 18.59 10.41 16z"></path><path d="M4,9H26v7h2V4a2,2,0,0,0-2-2H4A2,2,0,0,0,2,4V24a2,2,0,0,0,2,2H16V24H4ZM4,4H26V7H4Z"></path></svg>`;
export default svgResultCarbonIcon;
