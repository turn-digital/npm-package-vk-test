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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M25.8289 13.1155A10.02 10.02 0 0016 5.0005V7a8.0233 8.0233 0 017.8649 6.4934l.2591 1.346 1.3488.2441A5.5019 5.5019 0 0124.5076 26H16v2h8.5076a7.5019 7.5019 0 001.3213-14.8845zM8 24H14V26H8zM4 24H6V26H4zM6 20H14V22H6zM2 20H4V22H2zM8 16H14V18H8zM4 16H6V18H4zM10 12H14V14H10zM6 12H8V14H6zM12 8H14V10H12z"></path></svg>`;
export default svgResultCarbonIcon;
