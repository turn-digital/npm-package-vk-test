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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M8 26H4a2.0021 2.0021 0 01-2-2V20H4v4H8zM2 12H4V16H2zM26 8H24V4H20V2h4a2.0021 2.0021 0 012 2zM12 2H16V4H12zM4 8H2V4A2.0021 2.0021 0 014 2H8V4H4zM27 32a.9967.9967 0 01-.707-.293l-6.1377-6.1377L16.832 30.5547a1 1 0 01-1.79-.2676l-6-20A1 1 0 0110.2871 9.042l20 6a1 1 0 01.2676 1.79l-4.9854 3.3233L31.707 26.293a.9994.9994 0 010 1.414l-4 4A.9967.9967 0 0127 32zm0-2.4141L29.5859 27 22.431 19.845l5.2458-3.4978L11.4917 11.4917l4.8555 16.1851L19.845 22.431z"></path></svg>`;
export default svgResultCarbonIcon;
