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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M24,10l-1.4141,1.4141L26.1719,15H11.8989A5.0145,5.0145,0,0,0,8,11.1011V2H6v9.1011a5,5,0,0,0,0,9.7978V30H8V20.8989A5.0145,5.0145,0,0,0,11.8989,17h14.273l-3.586,3.5859L24,22l6-6ZM7,19a3,3,0,1,1,3-3A3.0033,3.0033,0,0,1,7,19Z"></path></svg>`;
export default svgResultCarbonIcon;
