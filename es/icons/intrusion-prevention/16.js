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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<circle cx="22" cy="23.887" r="2"></circle><path d="M29.7769 23.4785A8.64 8.64 0 0022 18a8.64 8.64 0 00-7.7769 5.4785L14 24l.2231.5215A8.64 8.64 0 0022 30a8.64 8.64 0 007.7769-5.4785L30 24zM22 28a4 4 0 114-4A4.0045 4.0045 0 0122 28zM25 10H4A2.0021 2.0021 0 012 8V4A2.0021 2.0021 0 014 2H25a2.0021 2.0021 0 012 2V8A2.0021 2.0021 0 0125 10zM4 4V8H25V4zM12 28H4V24h8V22H4a2.0023 2.0023 0 00-2 2v4a2.0023 2.0023 0 002 2h8z"></path><path d="M28,12H7a2.0023,2.0023,0,0,0-2,2v4a2.0023,2.0023,0,0,0,2,2h5V18H7V14H28l.0007,2H30V14A2.0023,2.0023,0,0,0,28,12Z"></path></svg>`;
export default svgResultCarbonIcon;
