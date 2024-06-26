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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M18 31h2V29a1.0006 1.0006 0 011-1h6a1.0006 1.0006 0 011 1v2h2V29a3.0033 3.0033 0 00-3-3H21a3.0033 3.0033 0 00-3 3zM24 25a4 4 0 114-4A4.0039 4.0039 0 0124 25zm0-6a2 2 0 102 2A2.0027 2.0027 0 0024 19zM2 31H4V29a1.0009 1.0009 0 011-1h6a1.0009 1.0009 0 011 1v2h2V29a3.0033 3.0033 0 00-3-3H5a3.0033 3.0033 0 00-3 3zM8 25a4 4 0 114-4A4.0042 4.0042 0 018 25zm0-6a2 2 0 102 2A2.0023 2.0023 0 008 19zM18 16h2V14a1.0009 1.0009 0 011-1h6a1.0009 1.0009 0 011 1v2h2V14a3.0033 3.0033 0 00-3-3H21a3.0033 3.0033 0 00-3 3zM24 10a4 4 0 114-4A4.0042 4.0042 0 0124 10zm0-6a2 2 0 102 2A2.0023 2.0023 0 0024 4zM2 16H4V14a1.0013 1.0013 0 011-1h6a1.0013 1.0013 0 011 1v2h2V14a3.0033 3.0033 0 00-3-3H5a3.0033 3.0033 0 00-3 3zM8 10a4 4 0 114-4A4.0045 4.0045 0 018 10zM8 4a2 2 0 102 2A2.002 2.002 0 008 4z"></path></svg>`;
export default svgResultCarbonIcon;
