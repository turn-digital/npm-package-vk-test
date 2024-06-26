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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M28,20H26v2h2v6H4V22H6V20H4a2.0024,2.0024,0,0,0-2,2v6a2.0024,2.0024,0,0,0,2,2H28a2.0024,2.0024,0,0,0,2-2V22A2.0024,2.0024,0,0,0,28,20Z"></path><circle cx="7" cy="25" r="1"></circle><path d="M22.707,7.293l-5-5A1,1,0,0,0,17,2H11A2.0023,2.0023,0,0,0,9,4V20a2.0023,2.0023,0,0,0,2,2H21a2.0023,2.0023,0,0,0,2-2V8A1,1,0,0,0,22.707,7.293ZM20.5857,8H17V4.4141ZM11,20V4h4V8a2.0023,2.0023,0,0,0,2,2h4V20Z"></path></svg>`;
export default svgResultCarbonIcon;
