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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M14 28V16a2.0023 2.0023 0 012-2H28a2.0023 2.0023 0 012 2V28a2.0023 2.0023 0 01-2 2H16A2.0023 2.0023 0 0114 28zm2-12l-.0012 12H28V16zM2 15l1.41-1.41L6 16.17V11a7.0078 7.0078 0 017-7h5V6H13a5.0057 5.0057 0 00-5 5v5.17l2.59-2.58L12 15 7 20z"></path></svg>`;
export default svgResultCarbonIcon;
