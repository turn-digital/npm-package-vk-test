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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M23,20.5151c0-4.6152-3.78-5.1411-6.8171-5.563-3.31-.4609-5.1829-.86-5.1829-3.71C11,8.8491,13.5071,8,15.6538,8a6.7538,6.7538,0,0,1,5.5681,2.6279l1.5562-1.2558A8.6508,8.6508,0,0,0,17,6.0962V3H15V6.022c-3.6152.2192-6,2.26-6,5.22,0,4.73,3.83,5.2627,6.9075,5.69C19.16,17.3848,21,17.7744,21,20.5151,21,23.5474,17.8674,24,16,24c-3.4294,0-4.8782-.9639-6.2219-2.6279L8.2219,22.6279A8.4382,8.4382,0,0,0,15,25.9648V29h2V25.9551C20.7256,25.6509,23,23.6279,23,20.5151Z"></path></svg>`;
export default svgResultCarbonIcon;