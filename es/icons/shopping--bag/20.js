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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M28.76,11.35A1,1,0,0,0,28,11H22V7a3,3,0,0,0-3-3H13a3,3,0,0,0-3,3v4H4a1,1,0,0,0-1,1.15L4.88,24.3a2,2,0,0,0,2,1.7H25.14a2,2,0,0,0,2-1.7L29,12.15A1,1,0,0,0,28.76,11.35ZM12,7a1,1,0,0,1,1-1h6a1,1,0,0,1,1,1v4H12ZM25.14,24H6.86L5.17,13H26.83Z"></path></svg>`;
export default svgResultCarbonIcon;
