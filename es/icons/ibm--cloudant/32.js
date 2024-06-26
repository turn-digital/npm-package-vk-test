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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M16 26h5c3.86 0 7-3.14 7-7v-2h-2v2c0 2.76-2.24 5-5 5h-5v2zM20.25 14c-2.34 0-4.25-1.91-4.25-4.25 0-1.79 1.14-3.38 2.78-3.99.74-2.21 2.84-3.76 5.22-3.76s4.48 1.55 5.22 3.76c1.65.61 2.78 2.19 2.78 3.99 0 2.29-1.86 4.19-4.14 4.25h-7.61zm3.75-10c-1.64 0-3.08 1.17-3.42 2.77l-.14.64-.64.13c-1.04.21-1.8 1.14-1.8 2.2 0 1.24 1.01 2.26 2.25 2.26h7.58c1.18-.03 2.17-1.05 2.17-2.26 0-1.06-.76-1.99-1.8-2.2l-.64-.13-.14-.64c-.34-1.6-1.78-2.77-3.42-2.77zM4 14h2v-2c0-2.76 2.24-5 5-5h4v-2h-4c-3.86 0-7 3.14-7 7v2zM10 17h-6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2v-10c0-1.1-.9-2-2-2zm0 2v2h-6v-2h6zm0 4v2h-6v-2h6zm-6 6v-2h6v2H4z"></path></svg>`;
export default svgResultCarbonIcon;
