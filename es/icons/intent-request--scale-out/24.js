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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M19 20.4L20.4 19 28 26.6 28 20 30 20 30 30 20 30 20 28 26.6 28zM13 20.4L11.6 19 4 26.6 4 20 2 20 2 30 12 30 12 28 5.4 28zM17 16L15 16 15 5.8 10.4 10.4 9 9 16 2 23 9 21.6 10.4 17 5.8z"></path></svg>`;
export default svgResultCarbonIcon;
