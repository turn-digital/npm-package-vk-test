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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M24 20H20a2.0023 2.0023 0 01-2-2V11a2.0023 2.0023 0 012-2h4a2.0023 2.0023 0 012 2v7A2.0023 2.0023 0 0124 20zm-4-9v7h4.0012L24 11zM12 28H8a2.0023 2.0023 0 01-2-2V11A2.0023 2.0023 0 018 9h4a2.0023 2.0023 0 012 2V26A2.0023 2.0023 0 0112 28zM8 11V26h4.0012L12 11zM2 4H30V6H2z"></path></svg>`;
export default svgResultCarbonIcon;
