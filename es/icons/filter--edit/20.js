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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M26,6H4V9.17l7.41,7.42.59.58V26h4V24h2v2a2,2,0,0,1-2,2H12a2,2,0,0,1-2-2V18L2.59,10.59A2,2,0,0,1,2,9.17V6A2,2,0,0,1,4,4H26Z"></path><path d="M29.71,11.29l-3-3a1,1,0,0,0-1.42,0L16,17.59V22h4.41l9.3-9.29A1,1,0,0,0,29.71,11.29ZM19.59,20H18V18.41l5-5L24.59,15ZM26,13.59,24.41,12,26,10.41,27.59,12Z"></path></svg>`;
export default svgResultCarbonIcon;
