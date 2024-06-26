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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M2 28H30V30H2zM7 5.828L7 24 9 24 9 5.828 12.586 9.414 14 8 8 2 2 8 3.414 9.414 7 5.828zM23 5.828L23 24 25 24 25 5.828 28.586 9.414 30 8 24 2 18 8 19.414 9.414 23 5.828z"></path></svg>`;
export default svgResultCarbonIcon;
