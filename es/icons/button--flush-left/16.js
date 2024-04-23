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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M6 15H20V17H6z"></path><path d="M28,22H4c-1.103,0-2-0.897-2-2v-8c0-1.103,0.897-2,2-2h24c1.103,0,2,0.897,2,2v8C30,21.103,29.103,22,28,22z M4,12v8h24v-8	H4z"></path></svg>`;
export default svgResultCarbonIcon;
