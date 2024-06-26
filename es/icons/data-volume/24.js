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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M30 20h-4v2h4v2h-3c-1.1046 0-2 .8954-2 2v2c0 1.1046.8954 2 2 2h5v-8c0-1.103-.8975-2-2-2zm0 8h-3v-2h3v2zM24 22v-2h-3v-2h-2v2h-2v2h2v6c0 1.1025.8975 2 2 2h3v-2h-3v-6h3zM14 20h-4v2h4v2h-3c-1.1046 0-2 .8954-2 2v2c0 1.1046.8954 2 2 2h5v-8c0-1.103-.8975-2-2-2zm0 8h-3v-2h3v2zM5 16.0005v4H2c-1.1025 0-2 .897-2 2v5.9995c0 1.1025.8975 2 2 2H7v-13.9995h-2zm-3 5.9995h3v6H2v-6zM4 14V5h7.5857l4 4h12.4143v8h2V9c-.0013-1.1041-.8959-1.9987-2-2h-11.5857l-3.4143-3.4141c-.3742-.3764-.8835-.5873-1.4143-.5859H4c-1.1041.0013-1.9987.8959-2 2V14h2z"></path></svg>`;
export default svgResultCarbonIcon;
