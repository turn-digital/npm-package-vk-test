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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 16 16">${children}<path d="M8,1C4.1,1,1,4.1,1,8s3.1,7,7,7s7-3.1,7-7S11.9,1,8,1z M5,13.2v-1.5c0-0.9,0.6-1.6,1.5-1.7h3c0.9,0.1,1.5,0.8,1.5,1.7v1.5	C9.1,14.3,6.9,14.3,5,13.2L5,13.2z M12,12l0-0.8c0-0.9-1.1-2.1-2.5-2.2h-3C5.1,9.1,4,10.3,4,11.7l0,0.5v0.3c-2.5-2.2-2.7-6-0.5-8.5	s6-2.7,8.5-0.5s2.7,6,0.5,8.5c-0.1,0.2-0.3,0.3-0.5,0.5V12z"></path><path d="M8,3C6.6,3,5.5,4.1,5.5,5.5S6.6,8,8,8s2.5-1.1,2.5-2.5S9.4,3,8,3z M8,7C7.2,7,6.5,6.3,6.5,5.5S7.2,4,8,4s1.5,0.7,1.5,1.5	S8.8,7,8,7z"></path></svg>`;
export default svgResultCarbonIcon;
