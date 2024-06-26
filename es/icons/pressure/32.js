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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M17.5053,16l8.1591-7.2529A1,1,0,0,0,25,7H22V2H20V9h2.37L16,14.6621,9.63,9H12V2H10V7H7a1,1,0,0,0-.6646,1.7471L14.4945,16,6.3353,23.2529A1,1,0,0,0,7,25h3v5h2V23H9.63L16,17.3379,22.37,23H20v7h2V25h3a1,1,0,0,0,.6645-1.7471Z"></path></svg>`;
export default svgResultCarbonIcon;
