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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M4 20L4 22 8.586 22 2 28.586 3.414 30 10 23.414 10 28 12 28 12 20 4 20zM29 12L27 6 25 6 25 16 27 16 27 10 29 16 31 16 31 6 29 6 29 12zM21.3335 6h-2.667A1.6683 1.6683 0 0017 7.6665v6.667A1.6684 1.6684 0 0018.6665 16h2.667A1.6683 1.6683 0 0023 14.3335V7.6665A1.6683 1.6683 0 0021.3335 6zM21 14H19V8h2zM9 7.6665V10a2.002 2.002 0 002 2h2v2H9v2h4.3335A1.6683 1.6683 0 0015 14.3335V12a2.002 2.002 0 00-2-2H11V8h4V6H10.6665A1.6683 1.6683 0 009 7.6665zM5 14H3V12H1v2.3335A1.6684 1.6684 0 002.6665 16h2.667A1.6683 1.6683 0 007 14.3335V6H5z"></path></svg>`;
export default svgResultCarbonIcon;
