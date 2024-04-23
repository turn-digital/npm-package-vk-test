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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M28,7H13.8281l3.586-3.5859L16,2,10,8l6,6,1.4141-1.4141L13.8281,9H28V20H11.8989A5.0145,5.0145,0,0,0,8,16.1011V2H6V16.1011a5,5,0,0,0,0,9.7978V30H8V25.8989A5.0145,5.0145,0,0,0,11.8989,22H28a2.0023,2.0023,0,0,0,2-2V9A2.0023,2.0023,0,0,0,28,7ZM7,24a3,3,0,1,1,3-3A3.0033,3.0033,0,0,1,7,24Z"></path></svg>`;
export default svgResultCarbonIcon;
