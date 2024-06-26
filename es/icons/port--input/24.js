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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M18,28c-3.5928,0-6.9666-1.5903-9.2566-4.3632l1.542-1.2737c1.9087,2.3113,4.7207,3.6368,7.7146,3.6368,5.5139,0,10-4.486,10-10s-4.4861-10-10-10c-2.9939,0-5.8059,1.3256-7.7146,3.6368l-1.542-1.2737c2.29-2.7728,5.6638-4.3632,9.2566-4.3632,6.6169,0,12,5.3832,12,12s-5.3831,12-12,12Z"></path><path d="M23 16L16 9 14.5859 10.4141 19.1719 15 2 15 2 17 19.1719 17 14.5859 21.5859 16 23 23 16z"></path></svg>`;
export default svgResultCarbonIcon;
