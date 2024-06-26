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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M14,28A10,10,0,0,1,14,8h4v5l6-6L18,1V6H14a12,12,0,0,0,0,24Z"></path><path d="M11.67 24L9.934 23 12.221 19 8.332 19 12.325 12 14.062 13 11.778 17 15.668 17 11.67 24zM20 20H16v2h4v2H17v2h3v2H16v2h4a2.0027 2.0027 0 002-2V22A2.0023 2.0023 0 0020 20zM28 30H26a2.0021 2.0021 0 01-2-2V22a2.0021 2.0021 0 012-2h2a2.0021 2.0021 0 012 2v6A2.0021 2.0021 0 0128 30zm-2-8v6h2V22z"></path></svg>`;
export default svgResultCarbonIcon;
