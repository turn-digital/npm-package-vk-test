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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M2 28H30V30H2zM26 26H24a7.987 7.987 0 00-2.0371-5.3335l1.49-1.334A9.9835 9.9835 0 0126 26zM16 26H14a9.9268 9.9268 0 013.7539-7.804A7.89 7.89 0 0016 18a8.0092 8.0092 0 00-8 8H6A10.0113 10.0113 0 0116 16a9.8923 9.8923 0 014.4458 1.0515 1 1 0 010 1.79A7.9567 7.9567 0 0016 26zM16 14L11 9 12.41 7.59 15 10.17 15 10 15 2 17 2 17 10 17 10.17 19.59 7.59 21 9 16 14z"></path></svg>`;
export default svgResultCarbonIcon;
