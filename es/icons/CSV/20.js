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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M28 9L26 22 24 9 22 9 24.516 23 27.484 23 30 9 28 9zM18 23H12V21h6V17H14a2.002 2.002 0 01-2-2V11a2.002 2.002 0 012-2h6v2H14v4h4a2.002 2.002 0 012 2v4A2.002 2.002 0 0118 23zM10 23H4a2.0023 2.0023 0 01-2-2V11A2.002 2.002 0 014 9h6v2H4V21h6z"></path></svg>`;
export default svgResultCarbonIcon;
