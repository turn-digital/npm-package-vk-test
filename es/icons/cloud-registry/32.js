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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M28 30H23a2.0023 2.0023 0 01-2-2V23a2.0023 2.0023 0 012-2h5a2.0023 2.0023 0 012 2v5A2.0023 2.0023 0 0128 30zm-5-7h-.0012L23 28h5V23zM16 23H11a2.0023 2.0023 0 01-2-2V11a2.0023 2.0023 0 012-2H21a2.0023 2.0023 0 012 2v5H21V11H11V21h5z"></path><path d="M16,30H4a2.0023,2.0023,0,0,1-2-2V4A2.0023,2.0023,0,0,1,4,2H28a2.0023,2.0023,0,0,1,2,2V16H28V4H4V28H16Z"></path></svg>`;
export default svgResultCarbonIcon;
