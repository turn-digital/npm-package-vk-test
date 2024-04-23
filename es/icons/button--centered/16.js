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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M9 15H23V17H9z"></path><path d="M28,22H4a2.0021,2.0021,0,0,1-2-2V12a2.0021,2.0021,0,0,1,2-2H28a2.0021,2.0021,0,0,1,2,2v8A2.0021,2.0021,0,0,1,28,22ZM4,12v8H28V12Z"></path></svg>`;
export default svgResultCarbonIcon;
