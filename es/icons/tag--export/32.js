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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M31 18L25 12 23.586 13.414 27.172 17 17 17 17 19 27.172 19 23.586 22.586 25 24 31 18zM10 14a4 4 0 114-4A4.0045 4.0045 0 0110 14zm0-6a2 2 0 101.998 2.0044A2.002 2.002 0 0010 8z"></path><path d="M21.0593,25l-3.0014,3L4,13.9414V4h9.9417l7,7,1.4143-1.414-7.001-7A2,2,0,0,0,13.9414,2H4A2,2,0,0,0,2,4v9.9414a2,2,0,0,0,.5857,1.4141L16.6436,29.4146a2.001,2.001,0,0,0,2.8286,0l3.0014-3Z"></path></svg>`;
export default svgResultCarbonIcon;
