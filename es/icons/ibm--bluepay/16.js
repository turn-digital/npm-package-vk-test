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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M5 26V15.8281l-3.5859 3.586L0 18l6-6 6 6-1.4141 1.4141-3.5859-3.586v10.1719h12v2H7c-1.104-.0013-1.9987-.896-2-2zM31 18h-3v-2h-2v2h-1c-1.1046 0-2 .8954-2 2v2c0 1.1046.8954 2 2 2h4v2h-6s0 2 0 2h3v2h2v-2h1c1.1046 0 2-.8954 2-2v-2c0-1.1046-.8954-2-2-2h-4v-2h6v-2zM28 12V6c-.0012-1.104-.896-1.9988-2-2H12v2h14v6M2 6H7V8H2zM2 2H10V4H2z"></path></svg>`;
export default svgResultCarbonIcon;
