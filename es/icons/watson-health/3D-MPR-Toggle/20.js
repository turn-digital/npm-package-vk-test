/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { svg } from 'lit';
import spread from '../../../globals/directives/spread';
const svgResultCarbonIcon = ({ children, ...attrs } = {}) =>
  svg`<svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" ...="${spread(
    attrs
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M11 2L2 2 2 11 4 11 4 4 11 4 11 2zM2 21L2 30 11 30 11 28 4 28 4 21 2 21zM30 11L30 2 21 2 21 4 28 4 28 11 30 11zM21 30L30 30 30 21 28 21 28 28 21 28 21 30zM25.49 10.13l-9-5a1 1 0 00-1 0l-9 5A1 1 0 006 11V21a1 1 0 00.51.87l9 5a1 1 0 001 0l9-5A1 1 0 0026 21V11A1 1 0 0025.49 10.13zM16 7.14L22.94 11 16 14.86 9.06 11zM8 12.7l7 3.89V24.3L8 20.41zm9 11.6V16.59l7-3.89v7.71z"></path></svg>`;
export default svgResultCarbonIcon;
