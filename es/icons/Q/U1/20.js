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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M13 23H9a2 2 0 01-2-2V9H9V21h4V9h2V21A2 2 0 0113 23zM22 21L22 9 17 9 17 11 20 11 20 21 17 21 17 23 25 23 25 21 22 21z"></path></svg>`;
export default svgResultCarbonIcon;
