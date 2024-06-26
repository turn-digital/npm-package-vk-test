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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M30 25L2 25 2 27 4 27 4 29 6 29 6 27 11 27 11 29 13 29 13 27 18 27 18 29 20 29 20 27 25 27 25 29 27 29 27 27 30 27 30 25zM29.7144 16.59L18.1494 8.64A14.9327 14.9327 0 009.6519 6H2V8H9.6519a12.9459 12.9459 0 017.3647 2.2871L18.0532 11H9v2H20.9624l7.6187 5.2378A.966.966 0 0128.0342 20H2v2H28.0342a2.9661 2.9661 0 001.68-5.41z"></path></svg>`;
export default svgResultCarbonIcon;
