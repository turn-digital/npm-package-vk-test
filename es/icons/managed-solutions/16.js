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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M30 23L25 23 25 18 23 18 23 23 18 23 18 25 23 25 23 30 25 30 25 25 30 25 30 23z"></path><path d="M24.1273,11.8394l1.1807.2136a5.7919,5.7919,0,0,1,2.6247,1.1445A5.4219,5.4219,0,0,1,29.9532,18h2.0293a7.5022,7.5022,0,0,0-6.15-7.8848,10.0067,10.0067,0,0,0-7.9387-7.9336,10.0025,10.0025,0,0,0-11.72,7.9336A7.5055,7.5055,0,0,0,.0576,18.4088,7.6841,7.6841,0,0,0,7.7725,25H14V23H7.6978a5.6323,5.6323,0,0,1-5.6024-4.4859,5.5064,5.5064,0,0,1,4.4338-6.4306l1.3488-.2441.2138-1.11a8.2061,8.2061,0,0,1,6.7427-6.6426,7.9714,7.9714,0,0,1,3.0138.13,8.1442,8.1442,0,0,1,6.0526,6.4464Z"></path></svg>`;
export default svgResultCarbonIcon;
