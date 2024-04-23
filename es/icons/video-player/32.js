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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M13 11L13 21 21 16 13 11z"></path><path d="m28,6H4c-1.103,0-2,.8975-2,2v16c0,1.1025.897,2,2,2h24c1.103,0,2-.8975,2-2V8c0-1.1025-.897-2-2-2Zm0,18H4V8h24v16Z"></path></svg>`;
export default svgResultCarbonIcon;
