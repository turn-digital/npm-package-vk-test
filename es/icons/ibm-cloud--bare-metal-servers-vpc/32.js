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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<circle cx="9" cy="26" r="1"></circle><path d="M4 24v4c0 1.1.9 2 2 2h12v-2H6v-4h12v-2H6c-1.1 0-2 .9-2 2zM4 13v5c0 1.1.9 2 2 2h8v-2H6v-5h-2z"></path><circle cx="9" cy="16" r="1"></circle><path d="M28 19v-5c0-1.1-.9-2-2-2h-8v2h8v5h2zM28 8v-4c0-1.1-.9-2-2-2h-12v2h12v4h-12v2h12c1.1 0 2-.9 2-2z"></path><path d="m23.41,22l-13.41-13.41V2H2v8h6.59l13.41,13.41v6.59h8v-8h-6.59Zm-15.41-14h-4v-4h4v4Zm20,20h-4v-4h4v4Z"></path></svg>`;
export default svgResultCarbonIcon;
