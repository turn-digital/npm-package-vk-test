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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M2 28H30V30H2zM24 26H8a2.0021 2.0021 0 01-2-2V20a2.0021 2.0021 0 012-2H24a2.0021 2.0021 0 012 2v4A2.0021 2.0021 0 0124 26zm0-6.0012L8 20v4H24zM2 12H30V14H2zM20 10H12a2.0021 2.0021 0 01-2-2V4a2.0021 2.0021 0 012-2h8a2.0021 2.0021 0 012 2V8A2.0021 2.0021 0 0120 10zm0-6.0012L12 4V8h8z"></path></svg>`;
export default svgResultCarbonIcon;
