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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M27 20.3972v3c-1 0-2-1.5-2-4v-3c-4 5-5 7-5 9A5.0008 5.0008 0 0023.0458 30 7.5281 7.5281 0 0125 26.3972 7.5281 7.5281 0 0126.9542 30 5.0008 5.0008 0 0030 25.3972C30 23.3972 28.875 21.8258 27 20.3972zM17 28H4V24H17V22H4a2.0023 2.0023 0 00-2 2v4a2.0023 2.0023 0 002 2H17z"></path><path d="M28 12H7a2.0023 2.0023 0 00-2 2v4a2.0023 2.0023 0 002 2H17V18H7V14H28l.0011 2H30V14A2.0023 2.0023 0 0028 12zM25 10H4A2.0021 2.0021 0 012 8V4A2.0021 2.0021 0 014 2H25a2.0021 2.0021 0 012 2V8A2.0021 2.0021 0 0125 10zM4 4V8H25V4z"></path></svg>`;
export default svgResultCarbonIcon;
