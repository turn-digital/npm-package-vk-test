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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<circle cx="21.5" cy="7.5" r="1.5"></circle><path d="M14.4143 20H9V14.5857l6.03-6.03A5.3518 5.3518 0 0115 8a6 6 0 116 6 5.3583 5.3583 0 01-.5559-.03zM11 18h2.5857l6.1706-6.1709.5174.0957A3.935 3.935 0 0021 12a4.0507 4.0507 0 10-3.925-3.2729l.0952.5166L11 15.4143zM28 20H19v2h9v6H4V22H6V20H4a2.0024 2.0024 0 00-2 2v6a2.0024 2.0024 0 002 2H28a2.0024 2.0024 0 002-2V22A2.0024 2.0024 0 0028 20z"></path><circle cx="7" cy="25" r="1"></circle></svg>`;
export default svgResultCarbonIcon;
