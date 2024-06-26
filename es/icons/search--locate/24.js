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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M30 28.5859l-4.6885-4.6884a8.028 8.028 0 10-1.414 1.414L28.5859 30zM19 25a6 6 0 116-6A6.0066 6.0066 0 0119 25zM2 12H10V14H2zM2 2H18V4H2zM2 7H18V9H2z"></path></svg>`;
export default svgResultCarbonIcon;
