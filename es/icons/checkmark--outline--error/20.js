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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M14,24A10,10,0,1,1,24,14h2A12,12,0,1,0,14,26Z"></path><path d="M12 15.59L9.41 13 8 14.41 12 18.41 19 11.41 17.59 10 12 15.59zM30 24a6 6 0 10-6 6A6.0066 6.0066 0 0030 24zm-2 0a3.9521 3.9521 0 01-.5669 2.019L21.981 20.5669A3.9529 3.9529 0 0124 20 4.0045 4.0045 0 0128 24zm-8 0a3.9521 3.9521 0 01.5669-2.019l5.4521 5.4521A3.9529 3.9529 0 0124 28 4.0045 4.0045 0 0120 24z"></path></svg>`;
export default svgResultCarbonIcon;
