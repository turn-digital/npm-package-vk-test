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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M25,10h-.06A9,9,0,0,0,7.06,10H7A5,5,0,0,0,7,20H9V11a7,7,0,0,1,14,0V21a4,4,0,0,1-3.17,3.91,4,4,0,1,0,.05,2A6,6,0,0,0,25,21V20a5,5,0,0,0,0-10ZM4,15a3,3,0,0,1,3-3v6A3,3,0,0,1,4,15ZM16,28a2,2,0,1,1,2-2A2,2,0,0,1,16,28Zm9-10V12a3,3,0,0,1,0,6Z"></path></svg>`;
export default svgResultCarbonIcon;
