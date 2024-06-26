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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M10.57 30l.9333-2h8.9928l.9333 2h2.2072L17 15.7778V11H15v4.7778L8.3631 30zM16 18.3647L17.6965 22h-3.393zM13.37 24h5.26l.9333 2H12.4369zM10.7832 9.3325a7.0007 7.0007 0 0110.4341 0l-1.49 1.334a5 5 0 00-7.4537 0z"></path><path d="M7.1992,6.3994a11.0019,11.0019,0,0,1,17.6006,0L23.2,7.6a9.0009,9.0009,0,0,0-14.4014,0Z"></path></svg>`;
export default svgResultCarbonIcon;
