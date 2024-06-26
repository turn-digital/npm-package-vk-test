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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path fill="none" d="M16,18h2v8H16ZM4,15l7,7,1.4141-1.4141L7.8281,16H21a5,5,0,1,0-5-5v1h2V11a3,3,0,1,1,3,3H7.8281l4.586-4.5859L11,8Z" data-icon-path="inner-path"></path><path d="M2,4V28a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V4a2,2,0,0,0-2-2H4A2,2,0,0,0,2,4ZM16,18h2v8H16ZM4,15l7-7,1.4141,1.4141L7.8281,14H21a3,3,0,1,0-3-3v1H16V11a5,5,0,1,1,5,5H7.8281l4.586,4.5859L11,22Z"></path></svg>`;
export default svgResultCarbonIcon;
