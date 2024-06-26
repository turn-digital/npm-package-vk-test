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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M25 22H19a2.0023 2.0023 0 01-2-2V10a2.002 2.002 0 012-2h6v2H19V20h6zM13 8H9a2.002 2.002 0 00-2 2V20a2.0023 2.0023 0 002 2h1v2a2.0023 2.0023 0 002 2h2V24H12V22h1a2.0023 2.0023 0 002-2V10A2.002 2.002 0 0013 8zM9 20V10h4V20z"></path><path d="M28,30H4a2.0023,2.0023,0,0,1-2-2V4A2.002,2.002,0,0,1,4,2H28a2.0023,2.0023,0,0,1,2,2V28A2.0027,2.0027,0,0,1,28,30ZM4,4V28H28V4Z"></path></svg>`;
export default svgResultCarbonIcon;
