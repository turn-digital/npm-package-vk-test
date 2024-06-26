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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M16 30V28A12.0021 12.0021 0 0019.6924 4.5786l.6152-1.9033A14.0022 14.0022 0 0116 30zM7.7 4.7a14.7029 14.7029 0 00-3 3.1L6.3 9A13.2634 13.2634 0 018.9 6.3zM4.6 12.3l-1.9-.6A12.5111 12.5111 0 002 16H4A11.4756 11.4756 0 014.6 12.3zM11.7 2.7l.6 1.9A11.4756 11.4756 0 0116 4V2A12.5111 12.5111 0 0011.7 2.7z"></path><path d="M15.4023 24.248a11.9488 11.9488 0 00-1.7182-3.3354L15.2974 19.73a13.9486 13.9486 0 012.0044 3.893zM11.02 18.2668a11.9215 11.9215 0 00-3.3467-1.6943l.6114-1.9043a13.9242 13.9242 0 013.9072 1.978z"></path></svg>`;
export default svgResultCarbonIcon;
