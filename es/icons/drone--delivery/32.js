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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M20,30H12V22h8Zm-6-2h4V24H14Z"></path><path d="M32 11L22 11 22 13 26 13 26 16 6 16 6 13 10 13 10 11 0 11 0 13 4 13 4 18 9.132 18 6 22.697 6 27 8 27 8 23.303 11.535 18 20.465 18 24 23.303 24 27 26 27 26 22.697 22.868 18 28 18 28 13 32 13 32 11zM16 6a5.9817 5.9817 0 00-4.2407 1.7593l1.4136 1.4136a3.9936 3.9936 0 015.6542 0l1.4136-1.4136A5.9814 5.9814 0 0016 6z"></path><path d="M8.9324,4.9321l1.4133,1.4136a7.9877,7.9877,0,0,1,11.3086,0l1.4136-1.4136a9.9844,9.9844,0,0,0-14.1355,0Z"></path></svg>`;
export default svgResultCarbonIcon;
