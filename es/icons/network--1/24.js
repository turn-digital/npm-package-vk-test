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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M16 20a4 4 0 114-4A4.0045 4.0045 0 0116 20zm0-6a2 2 0 102 2A2.0021 2.0021 0 0016 14zM5 20a4 4 0 114-4A4.0045 4.0045 0 015 20zm0-6a2 2 0 102 2A2.0023 2.0023 0 005 14zM10 31a4 4 0 114-4A4.0045 4.0045 0 0110 31zm0-6a2 2 0 102 2A2.0021 2.0021 0 0010 25zM22 31a4 4 0 114-4A4.0045 4.0045 0 0122 31zm0-6a2 2 0 102 2A2.0021 2.0021 0 0022 25zM27 20a4 4 0 114-4A4.0045 4.0045 0 0127 20zm0-6a2 2 0 102 2A2.0021 2.0021 0 0027 14zM22 9a4 4 0 114-4A4.0045 4.0045 0 0122 9zm0-6a2 2 0 102 2A2.0021 2.0021 0 0022 3zM10 9a4 4 0 114-4A4.0045 4.0045 0 0110 9zm0-6a2 2 0 102 2A2.0021 2.0021 0 0010 3z"></path></svg>`;
export default svgResultCarbonIcon;
