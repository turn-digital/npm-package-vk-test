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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M28 22H24a2.0021 2.0021 0 01-2-2V12a2.0021 2.0021 0 012-2h4a2.0021 2.0021 0 012 2v8A2.0021 2.0021 0 0128 22zM24 12v8h4V12zM18 2H20V30H18zM12 26H8a2.0021 2.0021 0 01-2-2V8A2.0021 2.0021 0 018 6h4a2.0021 2.0021 0 012 2V24A2.0021 2.0021 0 0112 26zM8 8V24h4V8zM2 2H4V30H2z"></path></svg>`;
export default svgResultCarbonIcon;
