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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M14 7L9 2 4 7 5.413 8.416 8 5.833 8 14 10 14 10 5.833 12.586 8.414 14 7zM26.586 7.586L24 10.167 24 2 22 2 22 10.167 19.413 7.584 18 9 23 14 28 9 26.586 7.586zM20 20a3.4376 3.4376 0 01-3.0513-2.3164A1.007 1.007 0 0016 17a.9894.9894 0 00-.9468.6787A3.44 3.44 0 0112 20a3.4376 3.4376 0 01-3.0513-2.3164A1.007 1.007 0 008 17a.971.971 0 00-.9468.6787A3.44 3.44 0 014 20H2v2H4a4.9316 4.9316 0 004-1.9873 5.0192 5.0192 0 008 0A4.9316 4.9316 0 0020 22H30V20zM28 28a3.4376 3.4376 0 01-3.0513-2.3164A1.007 1.007 0 0024 25a.9894.9894 0 00-.9468.6787A3.44 3.44 0 0120 28a3.4376 3.4376 0 01-3.0513-2.3164A1.007 1.007 0 0016 25a.971.971 0 00-.9468.6787A3.44 3.44 0 0112 28H2v2H12a4.9316 4.9316 0 004-1.9873 5.0192 5.0192 0 008 0A4.9316 4.9316 0 0028 30h2V28z"></path></svg>`;
export default svgResultCarbonIcon;
