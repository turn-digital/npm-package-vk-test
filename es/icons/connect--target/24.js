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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M28 2H30V30H28zM20 10l-1.4141 1.4141L22.1719 15H11.8989a5 5 0 100 2h10.273l-3.586 3.5859L20 22l6-6zM7 19a3 3 0 113-3A3.0033 3.0033 0 017 19z"></path></svg>`;
export default svgResultCarbonIcon;
