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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M28 30H16a2.0023 2.0023 0 01-2-2V16a2.0023 2.0023 0 012-2H28a2.0023 2.0023 0 012 2V28A2.0023 2.0023 0 0128 30zM16 16V28H28.0012L28 16zM15 2L13.59 3.41 16.17 6H11a7.0078 7.0078 0 00-7 7v5H6V13a5.0057 5.0057 0 015-5h5.17l-2.58 2.59L15 12l5-5z"></path></svg>`;
export default svgResultCarbonIcon;
