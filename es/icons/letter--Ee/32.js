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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M25 19V15a2.0023 2.0023 0 00-2-2H19a2.0023 2.0023 0 00-2 2v6a2.0077 2.0077 0 002 2h5V21H19V19zm-6-4h4v2H19zM15 11L15 9 7 9 7 23 15 23 15 21 9 21 9 17 14 17 14 15 9 15 9 11 15 11z"></path></svg>`;
export default svgResultCarbonIcon;
