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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M9.18 18.57A7.41 7.41 0 019 17V14H7v3a8.84 8.84 0 00.58 3.18zM13 15V7a3 3 0 016 0V8.75l2-2A5 5 0 0011 7v8zM23 17a7 7 0 01-11.73 5.14l1.42-1.41A5 5 0 0021 17V12.42l9-9L28.59 2 2 28.59 3.41 30l6.44-6.44A8.91 8.91 0 0015 25.94V28H11v2H21V28H17V25.94A9 9 0 0025 17V14H23zm-4 0a3 3 0 01-4.9 2.31L19 14.42z"></path></svg>`;
export default svgResultCarbonIcon;
