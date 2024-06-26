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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M24,13H22a3.0033,3.0033,0,0,0-3-3V8A5.0057,5.0057,0,0,1,24,13Z"></path><path d="M28 13H26a7.0078 7.0078 0 00-7-7V4A9.01 9.01 0 0128 13zM26 29h-.17C6.18 27.87 3.39 11.29 3 6.23A3 3 0 015.7612 3.0088Q5.88 3 6 3h5.27a2 2 0 011.86 1.26L14.65 8a2 2 0 01-.44 2.16l-2.13 2.15a9.36 9.36 0 007.58 7.6l2.17-2.15A2 2 0 0124 17.35l3.77 1.51A2 2 0 0129 20.72V26A3 3 0 0126 29zM6 5a1 1 0 00-1.0032.9968q0 .0417.0032.0832C5.46 12 8.41 26 25.94 27a1 1 0 001.0582-.9382Q27 26.0309 27 26V20.72l-3.77-1.51-2.87 2.85L19.88 22C11.18 20.91 10 12.21 10 12.12l-.06-.48 2.84-2.87L11.28 5z"></path></svg>`;
export default svgResultCarbonIcon;
