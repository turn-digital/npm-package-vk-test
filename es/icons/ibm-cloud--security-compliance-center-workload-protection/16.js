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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M20 18v6.5c0 1.9 1.1 3.7 2.9 4.5l2.1 1 2.1-1c1.7-.8 2.9-2.6 2.9-4.5V18H20zM28 24.5c0 1.2-.7 2.2-1.7 2.7L25 27.8l-1.3-.6c-1-.5-1.7-1.6-1.7-2.7V20h6V24.5zM16 20c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4h-2c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2V20z"></path><path d="M16,25c-5,0-9-4-9-9s4-9,9-9s9,4,9,9h-2c0-3.9-3.1-7-7-7s-7,3.1-7,7s3.1,7,7,7V25z"></path><path d="M16,30C8.3,30,2,23.7,2,16S8.3,2,16,2s14,6.3,14,14h-2c0-6.6-5.4-12-12-12S4,9.4,4,16s5.4,12,12,12V30z"></path></svg>`;
export default svgResultCarbonIcon;
