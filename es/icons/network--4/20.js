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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<circle cx="21" cy="26" r="2"></circle><circle cx="21" cy="6" r="2"></circle><circle cx="4" cy="16" r="2"></circle><path d="M28,12a3.9962,3.9962,0,0,0-3.8579,3H19.8579a3.9655,3.9655,0,0,0-5.4914-2.6426L11.19,8.3872A3.9626,3.9626,0,0,0,12,6a4,4,0,1,0-4,4,3.96,3.96,0,0,0,1.6338-.3574l3.176,3.97a3.9239,3.9239,0,0,0,0,4.7744l-3.1758,3.97A3.96,3.96,0,0,0,8,22a4,4,0,1,0,4,4,3.9624,3.9624,0,0,0-.81-2.3872l3.1758-3.97A3.9658,3.9658,0,0,0,19.8579,17h4.2842A3.9934,3.9934,0,1,0,28,12ZM6,6A2,2,0,1,1,8,8,2.0023,2.0023,0,0,1,6,6ZM8,28a2,2,0,1,1,2-2A2.0023,2.0023,0,0,1,8,28Zm8-10a2,2,0,1,1,2-2A2.0023,2.0023,0,0,1,16,18Zm12,0a2,2,0,1,1,2-2A2.0023,2.0023,0,0,1,28,18Z"></path></svg>`;
export default svgResultCarbonIcon;
