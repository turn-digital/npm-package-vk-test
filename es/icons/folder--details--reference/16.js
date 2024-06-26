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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M16 28H23V30H16zM16 24H30V26H16zM16 20H30V22H16zM4 20L4 22 8.586 22 2 28.586 3.414 30 10 23.414 10 28 12 28 12 20 4 20zM28 8H16L12.5859 4.5859A2.0007 2.0007 0 0011.1716 4H4A2 2 0 002 6V18H4V6h7.1716l3.4141 3.4141L15.1716 10H28v8h2V10A2 2 0 0028 8z"></path></svg>`;
export default svgResultCarbonIcon;
