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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M21 24H11a2 2 0 00-2 2v2a2 2 0 002 2H21a2 2 0 002-2V26A2 2 0 0021 24zm0 4H11V26H21zM28.707 14.293l-12-12a.9994.9994 0 00-1.414 0l-12 12A1 1 0 004 16H9v4a2.0023 2.0023 0 002 2H21a2.0027 2.0027 0 002-2V16h5a1 1 0 00.707-1.707zM21 14v6H11V14H6.4141L16 4.4141 25.5859 14z"></path></svg>`;
export default svgResultCarbonIcon;
