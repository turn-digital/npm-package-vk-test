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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M27 25.586L25 23.586 25 21 23 21 23 24.414 25.586 27 27 25.586z"></path><path d="M24 31a7 7 0 117-7A7.0078 7.0078 0 0124 31zm0-12a5 5 0 105 5A5.0055 5.0055 0 0024 19zM16 28A12.0134 12.0134 0 014 16H2A14.0158 14.0158 0 0016 30zM12 8H7.0784A11.9843 11.9843 0 0128 16h2A13.9778 13.9778 0 006 6.2344V2H4v8h8z"></path></svg>`;
export default svgResultCarbonIcon;
