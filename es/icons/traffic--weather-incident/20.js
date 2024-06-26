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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M2 24H4V30H2zM28 2H30V30H28zM15 2H17V6H15zM15 10H17V14H15zM15 18H17V22H15zM15 26H17V30H15zM6 12A3.8978 3.8978 0 012 8.223a3.9017 3.9017 0 01.6533-2.0639L5.17 2.4141a1.0381 1.0381 0 011.6592 0L9.3154 6.11A3.9693 3.9693 0 0110 8.223 3.8978 3.8978 0 016 12zm0-7.2368L4.3438 7.2257A1.89 1.89 0 004 8.223a1.9007 1.9007 0 002 1.7775A1.9007 1.9007 0 008 8.223a1.98 1.98 0 00-.375-1.0466zM11 11.7627L9.3438 14.2253A1.89 1.89 0 009 15.2226 1.9007 1.9007 0 0011 17a1.9007 1.9007 0 002-1.7774 1.98 1.98 0 00-.375-1.0467zM6 15.7627L4.3438 18.2253A1.89 1.89 0 004 19.2226 1.9007 1.9007 0 006 21a1.9007 1.9007 0 002-1.7774 1.98 1.98 0 00-.375-1.0467z"></path></svg>`;
export default svgResultCarbonIcon;
