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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M23 13H18v2h5v2H19a2 2 0 00-2 2v2a2 2 0 002 2h6V15A2.0023 2.0023 0 0023 13zm0 8H19V19h4zM13 9H9a2.002 2.002 0 00-2 2V23H9V18h4v5h2V11A2.002 2.002 0 0013 9zM9 16V11h4v5z"></path><path d="M28,28H4a2.0021,2.0021,0,0,1-2-2V6A2.0021,2.0021,0,0,1,4,4H28a2.0021,2.0021,0,0,1,2,2V26A2.0021,2.0021,0,0,1,28,28ZM4,6V26H28V6Z"></path></svg>`;
export default svgResultCarbonIcon;
