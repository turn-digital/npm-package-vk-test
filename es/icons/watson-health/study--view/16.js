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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M28 20H25V18h3V4H14V7H12V4a2.002 2.002 0 012-2H28a2.0023 2.0023 0 012 2V18A2.0027 2.0027 0 0128 20zM17 22L17 20 13 20 13 18 16 18 16 16 13 16 13 14 11 14 11 16 8 16 8 18 11 18 11 20 7 20 7 22 11 22 11 24 8 24 8 26 16 26 16 24 13 24 13 22 17 22z"></path><path d="M20,30H4a2.0021,2.0021,0,0,1-2-2V12a2.0021,2.0021,0,0,1,2-2H20a2.0021,2.0021,0,0,1,2,2V28A2.0021,2.0021,0,0,1,20,30ZM4,12V28H20V12Z"></path></svg>`;
export default svgResultCarbonIcon;
