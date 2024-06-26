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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M18.7061,27.585a5.2615,5.2615,0,0,1-3.7227-8.9834l1.415,1.414a3.2638,3.2638,0,1,0,4.6153,4.6162l6.03-6.03a3.264,3.264,0,0,0-4.6162-4.6158l-1.414-1.414a5.2637,5.2637,0,0,1,7.4443,7.4438l-6.03,6.03A5.2461,5.2461,0,0,1,18.7061,27.585Z"></path><path d="M10.2642 29.9971A5.2619 5.2619 0 016.542 21.0137l6.03-6.03a5.2636 5.2636 0 117.4438 7.4438l-1.414-1.414a3.2639 3.2639 0 10-4.6158-4.6158l-6.03 6.03a3.264 3.264 0 004.6157 4.6162l1.414 1.4141A5.2452 5.2452 0 0110.2642 29.9971zM2 10H10V12H2zM2 6H14V8H2zM2 2H14V4H2z"></path></svg>`;
export default svgResultCarbonIcon;
