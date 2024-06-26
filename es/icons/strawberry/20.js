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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M9 10H11V12H9zM9 14H11V16H9zM13 12H15V14H13z"></path><path d="M9 28a5.169 5.169 0 01-.7441-.054A5.0935 5.0935 0 014 22.8669V11.1985a7.1615 7.1615 0 016.31-7.1653 6.9607 6.9607 0 014.4643 1.0706l7.9688 4.9807a6.98 6.98 0 01-.6885 12.19l-10.88 5.2285A4.9765 4.9765 0 019 28zM11.002 6q-.2484 0-.5005.0241A5.1463 5.1463 0 006 11.1985V22.8669a3.0839 3.0839 0 002.5435 3.1 3.0266 3.0266 0 001.7622-.2649l10.8828-5.23a4.9807 4.9807 0 00.4887-8.6958L13.7046 6.7935A4.9687 4.9687 0 0011.002 6zM26 7H22a4.0045 4.0045 0 01-4-4V2h2V3a2.0021 2.0021 0 002 2h4z"></path></svg>`;
export default svgResultCarbonIcon;
