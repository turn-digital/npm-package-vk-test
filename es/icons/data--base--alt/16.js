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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M7 8H12V10H7zM7 12H12V14H7zM7 16H12V18H7zM20 8H25V10H20zM20 12H25V14H20zM20 16H25V18H20z"></path><path d="M28,4H4A2.0023,2.0023,0,0,0,2,6V28a2.0023,2.0023,0,0,0,2,2H28a2.0023,2.0023,0,0,0,2-2V6A2.0023,2.0023,0,0,0,28,4ZM4,6H15V28H4ZM17,28V6H28V28Z"></path></svg>`;
export default svgResultCarbonIcon;
