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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M28,4H4C2.9,4,2,4.9,2,6v20c0,1.1,0.9,2,2,2h24c1.1,0,2-0.9,2-2V6C30,4.9,29.1,4,28,4z M28,15H17.8l3.6-3.6L20,10l-6,6l6,6	l1.4-1.4L17.8,17H28v9H12V6h16V15z"></path></svg>`;
export default svgResultCarbonIcon;
