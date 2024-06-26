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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M24.5 30a5.202 5.202 0 01-4.626-8.08L23.49 16.5382a1.217 1.217 0 012.02 0L29.06 21.8154A5.4921 5.4921 0 0130 24.751 5.385 5.385 0 0124.5 30zm0-11.38l-2.9356 4.3672A3.2079 3.2079 0 0024.5 28 3.3855 3.3855 0 0028 24.751a3.4354 3.4354 0 00-.63-1.867zM11 16V11h1a4.0045 4.0045 0 004-4V4H13a3.9779 3.9779 0 00-2.7468 1.1067A6.0034 6.0034 0 005 2H2V5a6.0066 6.0066 0 006 6H9v5H2v2H16V16zM13 6h1V7a2.002 2.002 0 01-2 2H11V8A2.002 2.002 0 0113 6zM8 9A4.0045 4.0045 0 014 5V4H5A4.0045 4.0045 0 019 8V9zM2 21H16V23H2zM2 26H16V28H2z"></path></svg>`;
export default svgResultCarbonIcon;
