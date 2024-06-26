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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M25.1407 23.7642l1.5315 1.2851a13.976 13.976 0 002.4408-4.1821l-1.8776-.6836A11.9729 11.9729 0 0125.1407 23.7642zM18 27.81l.4128 1.9677A13.8888 13.8888 0 0022.9543 28.14L22 26.4087A12.52 12.52 0 0118 27.81zM10 26.4087L9 28.14a14.14 14.14 0 004.5872 1.6382l.3469-1.9677A12.1519 12.1519 0 0110 26.4087zM4.7646 20.1836l-1.8776.6836a13.976 13.976 0 002.4408 4.1821l1.5315-1.2851A11.9729 11.9729 0 014.7646 20.1836zM16 22a1.5 1.5 0 101.5 1.5A1.5 1.5 0 0016 22zM15 8H17V19H15z"></path><path d="M30,16H28A12,12,0,0,0,4,16H2a14,14,0,0,1,28,0Z"></path></svg>`;
export default svgResultCarbonIcon;
