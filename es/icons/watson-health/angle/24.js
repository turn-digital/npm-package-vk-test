/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { svg } from 'lit';
import spread from '../../../globals/directives/spread';
const svgResultCarbonIcon = ({ children, ...attrs } = {}) =>
  svg`<svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" ...="${spread(
    attrs
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M9,24a3.51,3.51,0,0,0-.88-1.86L17.65,5.56l-1.73-1L6.35,21.12A3.06,3.06,0,0,0,5.5,21a3.5,3.5,0,1,0,3.15,5H28V24ZM5.5,26A1.5,1.5,0,1,1,7,24.5,1.5,1.5,0,0,1,5.5,26Z"></path><path d="M22,21h2a13,13,0,0,0-5.42-10.56l-1.16,1.62A11,11,0,0,1,22,21Z"></path></svg>`;
export default svgResultCarbonIcon;
