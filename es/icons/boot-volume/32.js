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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M32 22v-2h-3v-2h-2v2h-1v2h1v6c0 1.1025.8975 2 2 2h3v-2h-3v-6h3zM23 30h-3c-1.1025 0-2-.8975-2-2v-6c0-1.103.8975-2 2-2h3c1.1025 0 2 .897 2 2v6c0 1.1025-.8975 2-2 2zm-3-8v6h3v-6h-3zM14 30h-3c-1.1025 0-2-.8975-2-2v-6c0-1.103.8975-2 2-2h3c1.1025 0 2 .897 2 2v6c0 1.1025-.8975 2-2 2zm-3-8v6h3v-6h-3zM5 20H2v-4H0v14H5c1.1025 0 2-.8975 2-2v-6c0-1.103-.8975-2-2-2zm-3 8v-6h3v6H2zM4 14V5h7.5857l4 4h12.4143v7h2v-7c-.0013-1.1041-.8959-1.9987-2-2h-11.5857l-3.4143-3.4141c-.3742-.3764-.8835-.5873-1.4143-.5859H4c-1.1041.0013-1.9987.8959-2 2V14h2z"></path></svg>`;
export default svgResultCarbonIcon;
