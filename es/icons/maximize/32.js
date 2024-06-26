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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M20 2L20 4 26.586 4 18 12.582 19.414 14 28 5.414 28 12 30 12 30 2 20 2zM14 19.416L12.592 18 4 26.586 4 20 2 20 2 30 12 30 12 28 5.414 28 14 19.416z"></path></svg>`;
export default svgResultCarbonIcon;
