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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M16,14a4,4,0,1,1,4-4h0A4.0118,4.0118,0,0,1,16,14Zm0-6a2,2,0,1,0,2,2h0a2.0059,2.0059,0,0,0-2-2Z"></path><path d="M24,2H8A2.0023,2.0023,0,0,0,6,4V28a2.0023,2.0023,0,0,0,2,2H24a2.0023,2.0023,0,0,0,2-2V4A2.0023,2.0023,0,0,0,24,2ZM12,24V18a.9447.9447,0,0,1,1-1h6a.9447.9447,0,0,1,1,1v6H18v4H14V24Zm8,4V26a2.0058,2.0058,0,0,0,2-2V18a2.9463,2.9463,0,0,0-3-3H13a2.9463,2.9463,0,0,0-3,3v6a2.0058,2.0058,0,0,0,2,2v2H8V4H24V28Z"></path></svg>`;
export default svgResultCarbonIcon;
