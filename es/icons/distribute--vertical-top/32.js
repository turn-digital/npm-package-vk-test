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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M24 30H8a2.0021 2.0021 0 01-2-2V24a2.0021 2.0021 0 012-2H24a2.0021 2.0021 0 012 2v4A2.0021 2.0021 0 0124 30zM8 24v4H24V24zM2 18H30V20H2zM20 14H12a2.0021 2.0021 0 01-2-2V8a2.0021 2.0021 0 012-2h8a2.0021 2.0021 0 012 2v4A2.0021 2.0021 0 0120 14zM12 8v4h8V8zM2 2H30V4H2z"></path></svg>`;
export default svgResultCarbonIcon;
