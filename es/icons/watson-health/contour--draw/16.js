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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M7.7 4.7a14.7029 14.7029 0 00-3 3.1L6.3 9A13.2634 13.2634 0 018.9 6.3zM4.6 12.3l-1.9-.6A12.5111 12.5111 0 002 16H4A11.4756 11.4756 0 014.6 12.3zM11.7 2.7l.6 1.9A11.4756 11.4756 0 0116 4V2A12.5111 12.5111 0 0011.7 2.7zM24.2 27.3a15.18 15.18 0 003.1-3.1L25.7 23A11.526 11.526 0 0123 25.7zM27.4 19.7l1.9.6A15.4747 15.4747 0 0030 16H28A11.4756 11.4756 0 0127.4 19.7zM29.2 11.6a14.4029 14.4029 0 00-2-3.9L25.6 8.9a12.8867 12.8867 0 011.7 3.3zM24.1 4.6a14.4029 14.4029 0 00-3.9-2l-.6 1.9a12.8867 12.8867 0 013.3 1.7zM20.3 29.3l-.6-1.9A11.4756 11.4756 0 0116 28v2A21.4206 21.4206 0 0020.3 29.3zM15.4023 24.248a11.9488 11.9488 0 00-1.7182-3.3354L15.2974 19.73a13.9486 13.9486 0 012.0044 3.893zM11.02 18.2668a11.9215 11.9215 0 00-3.3467-1.6943l.6114-1.9043a13.9242 13.9242 0 013.9072 1.978z"></path></svg>`;
export default svgResultCarbonIcon;
