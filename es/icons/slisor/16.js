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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M28,20H26v2h2v6H4V22H6V20H4a2.0024,2.0024,0,0,0-2,2v6a2.0024,2.0024,0,0,0,2,2H28a2.0024,2.0024,0,0,0,2-2V22A2.0024,2.0024,0,0,0,28,20Z"></path><circle cx="7" cy="25" r="1"></circle><path d="M16,22a1.0005,1.0005,0,0,1-.4473-.1055l-10-5,.8946-1.789L16,19.8821l9.5527-4.7766.8946,1.789-10,5A1.0005,1.0005,0,0,1,16,22Z"></path><path d="M16,16a1.0005,1.0005,0,0,1-.4473-.1055l-10-5a1,1,0,0,1,0-1.789l10-5a1.0008,1.0008,0,0,1,.8946,0l10,5a1,1,0,0,1,0,1.789l-10,5A1.0005,1.0005,0,0,1,16,16ZM8.2358,10,16,13.8821,23.7642,10,16,6.1179Z"></path></svg>`;
export default svgResultCarbonIcon;
