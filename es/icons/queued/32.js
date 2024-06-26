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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M22 20H30V22H22zM22 24H30V26H22zM22 28H30V30H22zM18 24H20V26H18zM18 20H20V22H18zM18 28H20V30H18zM6.8149 8.293A12.0777 12.0777 0 0110.0068 5.62L9.0079 3.89A14.0845 14.0845 0 005.2841 7.0083zM25.1851 8.293l1.5308-1.2847A14.0845 14.0845 0 0022.9921 3.89l-.9989 1.73A12.0777 12.0777 0 0125.1851 8.293zM4.7366 11.9l-1.8772-.6831A13.9019 13.9019 0 002 16H4A11.917 11.917 0 014.7366 11.9zM6.8149 23.707A11.9975 11.9975 0 014.7366 20.1l-1.8772.6831a13.99 13.99 0 002.4247 4.209zM27.2634 11.9A11.917 11.917 0 0128 16h2a13.8971 13.8971 0 00-.8594-4.7827zM13.9182 27.8066A11.8894 11.8894 0 0110.0068 26.38l-.9989 1.73a13.8673 13.8673 0 004.5633 1.664zM13.9182 4.1934a11.3012 11.3012 0 014.1636 0l.347-1.9678a13.187 13.187 0 00-4.8576 0z"></path></svg>`;
export default svgResultCarbonIcon;
