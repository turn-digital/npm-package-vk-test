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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M29,26a2.97,2.97,0,0,0-1.8551.6607L25,25.4224V23.8157a3,3,0,1,0-2,0v1.6067l-2.1449,1.2383A2.97,2.97,0,0,0,19,26a3.02,3.02,0,1,0,2.9254,2.3525L24,27.1548l2.0746,1.1977A2.9978,2.9978,0,1,0,29,26ZM19,30a1,1,0,1,1,1-1A1.0006,1.0006,0,0,1,19,30Zm5-10a1,1,0,1,1-1,1A1.0009,1.0009,0,0,1,24,20Zm5,10a1,1,0,1,1,1-1A1.0006,1.0006,0,0,1,29,30Z"></path><circle cx="7" cy="20" r="2"></circle><path d="M14,20a4,4,0,1,1,4-4A4.0118,4.0118,0,0,1,14,20Zm0-6a2,2,0,1,0,2,2A2.0059,2.0059,0,0,0,14,14Z"></path><circle cx="21" cy="12" r="2"></circle><path d="M13.0205,28.2715,3,22.4258V9.5742L14,3.1577,25.4961,9.8638l1.0078-1.7276-12-7a1,1,0,0,0-1.0078,0l-12,7A.9994.9994,0,0,0,1,9V23a1.0008,1.0008,0,0,0,.4961.8643L12.0127,30Z"></path></svg>`;
export default svgResultCarbonIcon;
