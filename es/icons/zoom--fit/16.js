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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M21.4479,20A10.856,10.856,0,0,0,24,13,11,11,0,1,0,13,24a10.856,10.856,0,0,0,7-2.5521L27.5859,29,29,27.5859ZM13,22a9,9,0,1,1,9-9A9.01,9.01,0,0,1,13,22Z"></path><path d="M10 12H8V10a2.0023 2.0023 0 012-2h2v2H10zM18 12H16V10H14V8h2a2.0023 2.0023 0 012 2zM12 18H10a2.0023 2.0023 0 01-2-2V14h2v2h2zM16 18H14V16h2V14h2v2A2.0023 2.0023 0 0116 18z"></path></svg>`;
export default svgResultCarbonIcon;
