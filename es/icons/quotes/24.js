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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M12 15H6.11A9 9 0 0110 8.86l1.79-1.2L10.69 6 8.9 7.2A11 11 0 004 16.35V23a2 2 0 002 2h6a2 2 0 002-2V17A2 2 0 0012 15zM26 15H20.11A9 9 0 0124 8.86l1.79-1.2L24.7 6 22.9 7.2A11 11 0 0018 16.35V23a2 2 0 002 2h6a2 2 0 002-2V17A2 2 0 0026 15z"></path></svg>`;
export default svgResultCarbonIcon;
