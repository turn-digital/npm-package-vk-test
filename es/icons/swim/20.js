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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M30 26H28a4.9316 4.9316 0 01-4-1.9873 5.0192 5.0192 0 01-8 0 5.0192 5.0192 0 01-8 0A4.9316 4.9316 0 014 26H2V24H4a3.44 3.44 0 003.0532-2.3215A.9712.9712 0 018 21a1.0069 1.0069 0 01.9487.6838A3.4381 3.4381 0 0012 24a3.44 3.44 0 003.0532-2.3215A.99.99 0 0116 21a1.0069 1.0069 0 01.9487.6838A3.4381 3.4381 0 0020 24a3.44 3.44 0 003.0532-2.3215 1 1 0 011.8955.0053A3.4381 3.4381 0 0028 24h2zM23 17.5859l-8.707-8.707A2.9791 2.9791 0 0012.1714 8H4v2h8.1714a.9933.9933 0 01.7075.293L15.5859 13 10 18.5859 11.4141 20 17 14.4141 21.5859 19zM20 10a4 4 0 114 4A4.0042 4.0042 0 0120 10zm2 0a2 2 0 102-2A2.0023 2.0023 0 0022 10z"></path></svg>`;
export default svgResultCarbonIcon;
