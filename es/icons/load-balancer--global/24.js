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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M4 26H8V30H4zM14 26H18V30H14zM24 26H28V30H24zM25 16H17V12H15v4H7a2.0023 2.0023 0 00-2 2v6H7V18h8v6h2V18h8v6h2V18A2.0023 2.0023 0 0025 16zM16 10a4 4 0 114-4A4.0045 4.0045 0 0116 10zm0-6a2 2 0 102 2A2.0021 2.0021 0 0016 4z"></path></svg>`;
export default svgResultCarbonIcon;
