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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M16 22a6 6 0 01-5.14-2.92l-1.71 1a8 8 0 0013.7 0l-1.71-1A6 6 0 0116 22zM30 4L26 4 26 0 24 0 24 4 20 4 20 6 24 6 24 10 26 10 26 6 30 6 30 4zM11.5 11A2.5 2.5 0 1014 13.5 2.48 2.48 0 0011.5 11zM20.5 11A2.5 2.5 0 1023 13.5 2.48 2.48 0 0020.5 11z"></path><path d="M27.61,13A12.33,12.33,0,0,1,28,16,12,12,0,1,1,16,4V2A14,14,0,1,0,29.67,13Z"></path></svg>`;
export default svgResultCarbonIcon;
