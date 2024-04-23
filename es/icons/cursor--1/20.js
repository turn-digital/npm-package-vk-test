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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M23,28a1,1,0,0,1-.71-.29l-6.13-6.14-3.33,5a1,1,0,0,1-1,.44,1,1,0,0,1-.81-.7l-6-20A1,1,0,0,1,6.29,5l20,6a1,1,0,0,1,.7.81,1,1,0,0,1-.44,1l-5,3.33,6.14,6.13a1,1,0,0,1,0,1.42l-4,4A1,1,0,0,1,23,28Zm0-2.41L25.59,23l-7.16-7.15,5.25-3.5L7.49,7.49l4.86,16.19,3.5-5.25Z"></path></svg>`;
export default svgResultCarbonIcon;