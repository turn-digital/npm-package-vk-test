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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M30 25V23H20.7676l-.8-3H27V18H19.4348l-2.469-9.2578-1.9316.5156 3.8017 14.2568A2.0037 2.0037 0 0020.77 25H22v3H10V25h6V23H6.7676l-.8-3H13V18H5.4348L2.9658 8.7422l-1.9316.5156L4.8359 23.5146A2.0037 2.0037 0 006.77 25H8v3H2v2H30V28H24V25zM27.303 2a2.6613 2.6613 0 00-1.9079.8059L25 3.2112l-.3951-.4053a2.6612 2.6612 0 00-3.8157 0 2.7991 2.7991 0 000 3.8963L25 11l4.2108-4.2978a2.7991 2.7991 0 000-3.8963A2.6613 2.6613 0 0027.303 2z"></path></svg>`;
export default svgResultCarbonIcon;