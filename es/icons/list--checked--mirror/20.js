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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M30 19.4L28.6 18 22 24.6 19.4 22 18 23.4 22 27.4zM2 22H16V24H2zM30 5.4L28.6 4 22 10.6 19.4 8 18 9.4 22 13.4zM2 8H16V10H2z"></path></svg>`;
export default svgResultCarbonIcon;
