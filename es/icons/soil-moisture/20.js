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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M24.5,28A5.385,5.385,0,0,1,19,22.751a5.3837,5.3837,0,0,1,.874-2.8308L23.49,14.5383a1.217,1.217,0,0,1,2.02,0L29.06,19.8154A5.4923,5.4923,0,0,1,30,22.751,5.385,5.385,0,0,1,24.5,28Zm0-11.38-2.9356,4.3672A3.3586,3.3586,0,0,0,21,22.751a3.51,3.51,0,0,0,7,0,3.4356,3.4356,0,0,0-.63-1.867Z"></path><circle cx="5" cy="13" r="1"></circle><circle cx="11" cy="19" r="1"></circle><circle cx="15" cy="25" r="1"></circle><circle cx="17" cy="15" r="1"></circle><circle cx="13" cy="11" r="1"></circle><circle cx="27" cy="11" r="1"></circle><circle cx="9" cy="27" r="1"></circle><circle cx="3" cy="21" r="1"></circle><path d="M2 6H30V8H2z"></path></svg>`;
export default svgResultCarbonIcon;
