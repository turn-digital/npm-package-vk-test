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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M4 20L4 22 8.586 22 2 28.586 3.414 30 10 23.414 10 28 12 28 12 20 4 20zM28 14L28 6 26 6 26 16 32 16 32 14 28 14zM24 6L22 6 20.5 10 19 6 17 6 17 16 19 16 19 9 20.5 13 22 9 22 16 24 16 24 6zM9 8L11 8 11 16 13 16 13 8 15 8 15 6 9 6 9 8zM5 6L5 10 2 10 2 6 0 6 0 16 2 16 2 12 5 12 5 16 7 16 7 6 5 6z"></path></svg>`;
export default svgResultCarbonIcon;
