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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M25.1 10.66L23.58 12a6 6 0 01-.18 7.94l1.47 1.36a8 8 0 00.23-10.59zM20 30a1 1 0 01-.71-.3L11.67 22H5a1 1 0 01-1-1H4V11a1 1 0 011-1h6.67l7.62-7.7a1 1 0 011.41 0A1 1 0 0121 3V29A1 1 0 0120 30z"></path></svg>`;
export default svgResultCarbonIcon;
