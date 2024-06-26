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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M28 6h-.5859L30 3.4141 28.5859 2 2 28.5859 3.4141 30l4-4H28a2.0027 2.0027 0 002-2V19a1 1 0 00-1-1 2 2 0 010-4 1 1 0 001-1V8A2.0023 2.0023 0 0028 6zm0 6.1265a4 4 0 000 7.7465V24H21V21H19v3H9.4141L19 14.4141V19h2V12.4141L25.4141 8H28zM4 12.1265V8H19V6H4A2.0023 2.0023 0 002 8v5a1 1 0 001 1 2 2 0 010 4 1 1 0 00-1 1v5H4V19.873a4 4 0 000-7.7465z"></path></svg>`;
export default svgResultCarbonIcon;
