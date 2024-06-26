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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M28,2H10A2.0023,2.0023,0,0,0,8,4V7H4A2.0023,2.0023,0,0,0,2,9V28a2.0023,2.0023,0,0,0,2,2H28a2.0023,2.0023,0,0,0,2-2V4A2.0023,2.0023,0,0,0,28,2ZM10,4H28V7H10ZM28,14H20V9h8ZM10,21V16h8v5Zm8,2v5H10V23ZM8,21H4V16H8ZM18,9v5H10V9Zm2,7h8v5H20ZM8,9v5H4V9ZM4,23H8v5H4Zm16,5V23h8v5Z"></path></svg>`;
export default svgResultCarbonIcon;
