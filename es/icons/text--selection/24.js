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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M28 27H21a3 3 0 01-3-3V22a3 3 0 013-3h5V17a1 1 0 00-1-1H19V14h6a3 3 0 013 3zm-7-6a1 1 0 00-1 1v2a1 1 0 001 1h5V21zM13 7h3V5H13a4 4 0 00-3 1.38A4 4 0 007 5H4V7H7A2 2 0 019 9v5H5v2H9v7a2 2 0 01-2 2H4v2H7a4 4 0 003-1.38A4 4 0 0013 27h3V25H13a2 2 0 01-2-2V16h4V14H11V9A2 2 0 0113 7z"></path></svg>`;
export default svgResultCarbonIcon;
