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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M28,20H26v2h2v6H4V22H14V20H4a2.0024,2.0024,0,0,0-2,2v6a2.0024,2.0024,0,0,0,2,2H28a2.0024,2.0024,0,0,0,2-2V22A2.0024,2.0024,0,0,0,28,20Z"></path><circle cx="7" cy="25" r="1"></circle><path d="M21,14a2.981,2.981,0,0,0-2.0374.811l-4.0039-2.4023A2.9578,2.9578,0,0,0,15,12a2.9578,2.9578,0,0,0-.0413-.4087L18.9626,9.189A2.9909,2.9909,0,1,0,18,7a2.9345,2.9345,0,0,0,.0415.4092L14.0376,9.8115a3,3,0,1,0,0,4.377l4.0039,2.4023A2.9345,2.9345,0,0,0,18,17a3,3,0,1,0,3-3Zm0-8a1,1,0,1,1-1,1A1.0009,1.0009,0,0,1,21,6Zm-9,7a1,1,0,1,1,1-1A1.0009,1.0009,0,0,1,12,13Zm9,5a1,1,0,1,1,1-1A1.0009,1.0009,0,0,1,21,18Z"></path></svg>`;
export default svgResultCarbonIcon;
