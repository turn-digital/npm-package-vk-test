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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M20,6a9.9272,9.9272,0,0,0-3.9968.8394,9.9758,9.9758,0,0,1,2.2451,1.36,8,8,0,1,1,0,15.6016,9.9758,9.9758,0,0,1-2.2451,1.36A9.9976,9.9976,0,1,0,20,6Z"></path><path d="M12,16a8.01,8.01,0,0,0,6.2483,7.8008,9.9858,9.9858,0,0,0,0-15.6016A8.01,8.01,0,0,0,12,16Z"></path><path fill="none" d="M12,16a8.01,8.01,0,0,1,6.2483-7.8008,9.9758,9.9758,0,0,0-2.2451-1.36,9.9909,9.9909,0,0,0,0,18.3212,9.9758,9.9758,0,0,0,2.2451-1.36A8.01,8.01,0,0,1,12,16Z" data-icon-path="inner-path"></path><path d="M10,16a10.0105,10.0105,0,0,1,6.0032-9.1606,10,10,0,1,0,0,18.3212A10.0105,10.0105,0,0,1,10,16Z"></path></svg>`;
export default svgResultCarbonIcon;
