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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M6 12H8V14H6zM18 12H20V14H18zM6 20H8V22H6zM6 16H8V18H6zM10 16H12V18H10zM22 12H26V14H22zM22 16H26V18H22z"></path><path d="M14.2 10H28v13h2V10c0-1.1-.9-2-2-2H12.2L14.2 10zM30 28.6L3.4 2 2 3.4 6.6 8H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h20.6l4 4L30 28.6zM4 24V10h4.6l2 2H10v2h2.6l2 2H14v2h2.6l2 2H10v2h10.6l2 2H4z"></path></svg>`;
export default svgResultCarbonIcon;
