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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M16,2A14,14,0,1,0,30,16,14,14,0,0,0,16,2Zm0,26A12,12,0,1,1,28,16,12,12,0,0,1,16,28Z"></path><path d="M24.41 11L23 9.59 21 11.59 19 9.59 17.59 11 19.59 13 17.59 15 19 16.41 21 14.41 23 16.41 24.41 15 22.41 13 24.41 11zM14.41 11L13 9.59 11 11.59 9 9.59 7.59 11 9.59 13 7.59 15 9 16.41 11 14.41 13 16.41 14.41 15 12.41 13 14.41 11zM16 19a3 3 0 103 3 3 3 0 00-3-3z"></path></svg>`;
export default svgResultCarbonIcon;
