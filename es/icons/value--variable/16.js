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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M26 28H22V26h4V6H22V4h4a2.0021 2.0021 0 012 2V26A2.0021 2.0021 0 0126 28zM20 11L18 11 16 14.897 14 11 12 11 14.905 16 12 21 14 21 16 17.201 18 21 20 21 17.098 16 20 11zM10 28H6a2.0021 2.0021 0 01-2-2V6A2.0021 2.0021 0 016 4h4V6H6V26h4z"></path></svg>`;
export default svgResultCarbonIcon;
