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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M19 10L19 19.2 13.5 10 11 10 11 22 13 22 13 12.8 18.5 22 21 22 21 10z"></path><path d="M16,30C8.3,30,2,23.7,2,16S8.3,2,16,2s14,6.3,14,14S23.7,30,16,30z M16,4C9.4,4,4,9.4,4,16s5.4,12,12,12s12-5.4,12-12	S22.6,4,16,4z"></path></svg>`;
export default svgResultCarbonIcon;
