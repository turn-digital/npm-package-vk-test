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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M24,24H6a2.0023,2.0023,0,0,1-2-2V10A2.002,2.002,0,0,1,6,8H24a2.0023,2.0023,0,0,1,2,2v1h1a2.0023,2.0023,0,0,1,2,2v6a2.0027,2.0027,0,0,1-2,2H26v1A2.0027,2.0027,0,0,1,24,24ZM6,10V22H24V19h3V13H24V10Z"></path><path d="M5 15H13V17H5z" transform="rotate(90 9 16)"></path></svg>`;
export default svgResultCarbonIcon;
