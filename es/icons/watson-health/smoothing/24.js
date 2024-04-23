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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<circle cx="16" cy="16" r="5"></circle><path d="M7.7 4.7a14.7029 14.7029 0 00-3 3.1L6.3 9A13.2634 13.2634 0 018.9 6.3zM4.6 12.3l-1.9-.6A12.5111 12.5111 0 002 16H4A11.4756 11.4756 0 014.6 12.3zM2.7 20.4a14.4029 14.4029 0 002 3.9l1.6-1.2a12.8867 12.8867 0 01-1.7-3.3zM7.8 27.3a14.4029 14.4029 0 003.9 2l.6-1.9A12.8867 12.8867 0 019 25.7zM11.7 2.7l.6 1.9A11.4756 11.4756 0 0116 4V2A12.5111 12.5111 0 0011.7 2.7zM24.2 27.3a15.18 15.18 0 003.1-3.1L25.7 23A11.526 11.526 0 0123 25.7zM27.4 19.7l1.9.6A15.4747 15.4747 0 0030 16H28A11.4756 11.4756 0 0127.4 19.7zM29.2 11.6a14.4029 14.4029 0 00-2-3.9L25.6 8.9a12.8867 12.8867 0 011.7 3.3zM24.1 4.6a14.4029 14.4029 0 00-3.9-2l-.6 1.9a12.8867 12.8867 0 013.3 1.7zM20.3 29.3l-.6-1.9A11.4756 11.4756 0 0116 28v2A21.4206 21.4206 0 0020.3 29.3z"></path></svg>`;
export default svgResultCarbonIcon;