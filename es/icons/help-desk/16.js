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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M27 10H21a3.0033 3.0033 0 00-3 3v6a2.0023 2.0023 0 002 2v7a2.0023 2.0023 0 002 2h4a2.0023 2.0023 0 002-2V21a2.0023 2.0023 0 002-2V13A3.0033 3.0033 0 0027 10zm1 9H26v9H22V19H20V13a1.0009 1.0009 0 011-1h6a1.0009 1.0009 0 011 1zM20 5a4 4 0 114 4A4.0042 4.0042 0 0120 5zm2 0a2 2 0 102-2A2.0023 2.0023 0 0022 5zM14 16V13a3.0033 3.0033 0 00-3-3H5a3.0033 3.0033 0 00-3 3v3H0v2H16V16zM4 13a1.0009 1.0009 0 011-1h6a1.0009 1.0009 0 011 1v3H4zM4 5A4 4 0 118 9 4.0042 4.0042 0 014 5zM6 5A2 2 0 108 3 2.0023 2.0023 0 006 5z"></path></svg>`;
export default svgResultCarbonIcon;
