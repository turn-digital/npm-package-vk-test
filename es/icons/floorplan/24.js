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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M28,2H4C2.9,2,2,2.9,2,4v24c0,1.1,0.9,2,2,2h15v-2c0-2.8,2.2-5,5-5v-2c-3.9,0-7,3.1-7,7h-3v-4h-2v4H4V4h8v14h2v-5h4v-2h-4V4	h14v7h-4v2h4v15h-4v2h4c1.1,0,2-0.9,2-2V4C30,2.9,29.1,2,28,2z"></path></svg>`;
export default svgResultCarbonIcon;
