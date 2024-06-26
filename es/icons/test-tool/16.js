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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M23 9.2L20.4 6.6 19 8 23 12 30 5 28.6 3.6zM12 5.4L10.6 4 8 6.6 5.4 4 4 5.4 6.6 8 4 10.6 5.4 12 8 9.4 10.6 12 12 10.6 9.4 8zM12 21.4L10.6 20 8 22.6 5.4 20 4 21.4 6.6 24 4 26.6 5.4 28 8 25.4 10.6 28 12 26.6 9.4 24z"></path><path d="M17 15L17 2 15 2 15 15 2 15 2 17 15 17 15 30 17 30 17 17 30 17 30 15z"></path></svg>`;
export default svgResultCarbonIcon;
