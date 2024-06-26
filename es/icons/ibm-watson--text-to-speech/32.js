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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M13 26h-2c-3.9 0-7-3.1-7-7v-2h2v2c0 2.8 2.2 5 5 5h2V26zM18 18h10c1.1 0 2 .9 2 2v6c0 1.1-.9 2-2 2h-2.4l-1.7 3-1.7-1 2.3-4H28v-6H18v6h3v2h-3c-1.1 0-2-.9-2-2v-6C16 18.9 16.9 18 18 18zM28 14h-2v-2c0-2.8-2.2-5-5-5h-4V5h4c3.9 0 7 3.1 7 7V14zM2 11H8V13H2zM2 7H14V9H2zM2 3H14V5H2z"></path></svg>`;
export default svgResultCarbonIcon;
