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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M25 10H7a3.0033 3.0033 0 00-3 3v6a2.0023 2.0023 0 002 2v7a2.0023 2.0023 0 002 2h4a2.0023 2.0023 0 002-2V16H12V28H8V19H6V13a1.0009 1.0009 0 011-1H25a1.0009 1.0009 0 011 1v6H24v9H20V16H18V28a2.0023 2.0023 0 002 2h4a2.0023 2.0023 0 002-2V21a2.0023 2.0023 0 002-2V13A3.0033 3.0033 0 0025 10zM10 9a4 4 0 114-4A4.0042 4.0042 0 0110 9zm0-6a2 2 0 102 2A2.0023 2.0023 0 0010 3zM22 9a4 4 0 114-4A4.0042 4.0042 0 0122 9zm0-6a2 2 0 102 2A2.0023 2.0023 0 0022 3z"></path></svg>`;
export default svgResultCarbonIcon;
