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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M26 2H30V6H26zM26 8H30V12H26zM20 2H24V6H20zM20 8H24V12H20zM25 30h-.17C5.18 28.87 2.39 12.29 2 7.23A3 3 0 014.7611 4.0088Q4.88 4 5 4h5.27a2 2 0 011.86 1.26L13.65 9a2 2 0 01-.44 2.16l-2.13 2.15a9.36 9.36 0 007.58 7.6l2.17-2.15A2 2 0 0123 18.35l3.77 1.51A2 2 0 0128 21.72V27A3 3 0 0125 30zM5 6a1 1 0 00-1.0032.9968c0 .0278.001.0555.0032.0832C4.46 13 7.41 27 24.94 28a1 1 0 001.0581-.9382Q26 27.0309 26 27V21.72l-3.77-1.51-2.87 2.85L18.88 23C10.18 21.91 9 13.21 9 13.12l-.06-.48 2.84-2.87L10.28 6z"></path></svg>`;
export default svgResultCarbonIcon;
