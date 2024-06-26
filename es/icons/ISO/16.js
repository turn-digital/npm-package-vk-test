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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M28 23H24a2 2 0 01-2-2V11a2 2 0 012-2h4a2 2 0 012 2V21A2 2 0 0128 23zM24 11V21h4V11zM18 23H12V21h6V17H14a2 2 0 01-2-2V11a2 2 0 012-2h6v2H14v4h4a2 2 0 012 2v4A2 2 0 0118 23zM2 11L5 11 5 21 2 21 2 23 10 23 10 21 7 21 7 11 10 11 10 9 2 9 2 11z"></path></svg>`;
export default svgResultCarbonIcon;
