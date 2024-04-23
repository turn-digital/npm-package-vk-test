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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M28,4H4C2.9,4,2,4.9,2,6v20c0,1.1,0.9,2,2,2h24c1.1,0,2-0.9,2-2V6C30,4.9,29.1,4,28,4z M28,26H12v-9h10.2l-3.6,3.6L20,22	l6-6l-6-6l-1.4,1.4l3.6,3.6H12V6h16V26z"></path></svg>`;
export default svgResultCarbonIcon;
