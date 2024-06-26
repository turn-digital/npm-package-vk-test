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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M29 28a2.8828 2.8828 0 01-1-.1816v-.0059a3.7662 3.7662 0 01-2.0532-2.1338A.971.971 0 0025 25a1.007 1.007 0 00-.9487.6836A3.4376 3.4376 0 0121 28a3.44 3.44 0 01-3.0532-2.3213A.9894.9894 0 0017 25a1.007 1.007 0 00-.9487.6836A3.4376 3.4376 0 0113 28a3.44 3.44 0 01-3.0532-2.3213 1 1 0 00-1.8955.0049A3.4376 3.4376 0 015 28H2v2H5a4.9316 4.9316 0 004-1.9873 5.0192 5.0192 0 008 0 5.0192 5.0192 0 008 0 5.1433 5.1433 0 002.1379 1.62A4.8374 4.8374 0 0029 30h1V28zM28 13.63L29.7573 15 31 13.4282 16.6123 2.2139a1.0094 1.0094 0 00-1.2427 0L1 13.4194l1.2427 1.5718L4 13.6211v5.1875a3.6907 3.6907 0 01-2 2.0039V22.896a4.9958 4.9958 0 003-1.8833 5.0192 5.0192 0 008 0 5.0192 5.0192 0 008 0A4.9316 4.9316 0 0025 23h5V21H28zm-6.0513 5.0532a1 1 0 00-1.8955-.0049A3.44 3.44 0 0117 21a3.4376 3.4376 0 01-3.0513-2.3164A1.007 1.007 0 0013 18a.9894.9894 0 00-.9468.6787A3.44 3.44 0 019 21a3.37 3.37 0 01-3.0021-2.19L6 12.0615l9.991-7.79L26 12.0718 26.0017 21H25A3.4376 3.4376 0 0121.9487 18.6836z"></path></svg>`;
export default svgResultCarbonIcon;
