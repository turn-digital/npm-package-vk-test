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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M16 7a3 3 0 113-3A3.0033 3.0033 0 0116 7zm0-4a1 1 0 101 1A1.001 1.001 0 0016 3zM11 30a3 3 0 113-3A3.0033 3.0033 0 0111 30zm0-4a1 1 0 101 1A1.001 1.001 0 0011 26zM7 11a3 3 0 113-3A3.0033 3.0033 0 017 11zM7 7A1 1 0 108 8 1.001 1.001 0 007 7zM21 30a3 3 0 113-3A3.0033 3.0033 0 0121 30zm0-4a1 1 0 101 1A1.001 1.001 0 0021 26zM25 11a3 3 0 113-3A3.0033 3.0033 0 0125 11zm0-4a1 1 0 101 1A1.001 1.001 0 0025 7zM4 21a3 3 0 113-3A3.0033 3.0033 0 014 21zm0-4a1 1 0 101 1A1.001 1.001 0 004 17zM28 21a3 3 0 113-3A3.0033 3.0033 0 0128 21zm0-4a1 1 0 101 1A1.001 1.001 0 0028 17zM16 22a6 6 0 116-6A6.0069 6.0069 0 0116 22zm0-10a4 4 0 104 4A4.0045 4.0045 0 0016 12z"></path></svg>`;
export default svgResultCarbonIcon;
