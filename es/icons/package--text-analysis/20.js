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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M13 22H19V24H13z"></path><path d="M2 18v2h2v8c0 1.1025.8972 2 2 2h20c1.1028 0 2-.8975 2-2v-8h2v-2H2zm24 10H6v-8h20v8zM29 16h-5c-1.1025 0-2-.8975-2-2v-6c0-1.103.8975-2 2-2h5v2h-5v6h5v2zM18 6h-4v-4h-2v14h6c1.1025 0 2-.8975 2-2v-6c0-1.103-.8975-2-2-2zm-4 8v-6h4v6h-4zM8 6H3v2h5v2h-4c-1.1046 0-2 .8954-2 2v2c0 1.1046.8954 2 2 2h6V8c0-1.103-.8975-2-2-2zm0 8h-4v-2h4v2z"></path></svg>`;
export default svgResultCarbonIcon;
