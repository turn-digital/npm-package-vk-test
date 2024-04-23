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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M28,30H20V24a2.002,2.002,0,0,1,2-2h4V18H20V16h6a2.0023,2.0023,0,0,1,2,2v4a2.0023,2.0023,0,0,1-2,2H22v4h6Z"></path><path d="M4.479 15.5H26.521V17.5H4.479z" transform="rotate(-45 15.5 16.5)"></path><path d="M4.5 15.5L4.5 14.5 7.5 14.5 7.5 3.5 4.5 3.5 4.5 2.5 8.5 2.5 8.5 14.5 11.5 14.5 11.5 15.5 4.5 15.5z"></path><path d="M8,3V15H8V3M9,2H4V4H7V14H4v2h8V14H9V2Z"></path></svg>`;
export default svgResultCarbonIcon;
