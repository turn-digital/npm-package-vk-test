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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M30 3.4141L28.5859 2 2 28.5859 3.4141 30l2-2H26a2.0027 2.0027 0 002-2V5.4141zM26 26H7.4141l7.7929-7.793 2.3788 2.3787a2 2 0 002.8284 0L22 19l4 3.9973zm0-5.8318l-2.5858-2.5859a2 2 0 00-2.8284 0L19 19.1682l-2.377-2.3771L26 7.4141zM6 22V19l5-4.9966 1.3733 1.3733 1.4159-1.416-1.375-1.375a2 2 0 00-2.8284 0L6 16.1716V6H22V4H6A2.002 2.002 0 004 6V22z"></path></svg>`;
export default svgResultCarbonIcon;
