/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { svg } from 'lit';
import spread from '../../../globals/directives/spread';
const svgResultCarbonIcon = ({ children, ...attrs } = {}) =>
  svg`<svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" ...="${spread(
    attrs
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M18 9L18 15 14 15 14 9 12 9 12 23 14 23 14 17 18 17 18 23 20 23 20 9 18 9z"></path><path d="M30,15H26V6a2,2,0,0,0-2-2H8A2,2,0,0,0,6,6v9H2v2H6v9a2,2,0,0,0,2,2H24a2,2,0,0,0,2-2V17h4ZM8,26V6H24V26Z"></path></svg>`;
export default svgResultCarbonIcon;
