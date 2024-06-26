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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 16 16">${children}<path d="M4.1 12.6l-.6.8c.6.5 1.3.9 2.1 1.2l.3-.9C5.3 13.4 4.7 13 4.1 12.6zM2.1 9l-1 .2c.1.8.4 1.6.8 2.3L2.8 11C2.4 10.4 2.2 9.7 2.1 9zM5.9 2.4L5.6 1.4C4.8 1.7 4.1 2.1 3.5 2.7l.6.8C4.7 3 5.3 2.6 5.9 2.4zM2.8 5L1.9 4.5C1.5 5.2 1.3 6 1.1 6.8l1 .2C2.2 6.3 2.5 5.6 2.8 5zM8 1v1c3.3 0 6 2.7 6 6s-2.7 6-6 6v1c3.9 0 7-3.1 7-7S11.9 1 8 1z"></path></svg>`;
export default svgResultCarbonIcon;
