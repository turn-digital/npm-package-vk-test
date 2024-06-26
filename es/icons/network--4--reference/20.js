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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<circle cx="21" cy="26" r="2"></circle><path d="M4 20L4 22 8.586 22 2 28.586 3.414 30 10 23.414 10 28 12 28 12 20 4 20z"></path><circle cx="21" cy="6" r="2"></circle><circle cx="4" cy="16" r="2"></circle><path d="M28,12a3.9962,3.9962,0,0,0-3.8579,3H19.8579a3.9655,3.9655,0,0,0-5.4914-2.6426L11.19,8.3872A3.9624,3.9624,0,0,0,12,6a4,4,0,1,0-4,4,3.96,3.96,0,0,0,1.6338-.3574l3.176,3.97A3.9613,3.9613,0,0,0,12,16a3.9915,3.9915,0,0,0,7.8579,1h4.2842A3.9934,3.9934,0,1,0,28,12ZM8,8a2,2,0,1,1,2-2A2.0023,2.0023,0,0,1,8,8Zm8,10a2,2,0,1,1,2-2A2.0025,2.0025,0,0,1,16,18Zm12,0a2,2,0,1,1,2-2A2.0023,2.0023,0,0,1,28,18Z"></path></svg>`;
export default svgResultCarbonIcon;
