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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M26 24v4H6V24H4v4l.0076-.0049A1.9977 1.9977 0 006 30H26a2 2 0 002-2h0V24zM6 12L7.411 13.405 15 5.825 15 24 17 24 17 5.825 24.591 13.405 26 12 16 2 6 12z"></path></svg>`;
export default svgResultCarbonIcon;
