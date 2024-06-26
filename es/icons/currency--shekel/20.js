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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M9,27H7V5h8a5.0057,5.0057,0,0,1,5,5V22H18V10a3.0033,3.0033,0,0,0-3-3H9Z"></path><path d="M20,27H12V10h2V25h6a3.0033,3.0033,0,0,0,3-3V5h2V22A5.0057,5.0057,0,0,1,20,27Z"></path></svg>`;
export default svgResultCarbonIcon;
