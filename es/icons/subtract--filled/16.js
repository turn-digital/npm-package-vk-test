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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="m16,2c-7.6,0-14,6.4-14,14s6.4,14,14,14,14-6.4,14-14S23.6,2,16,2Zm8,15H8v-2h16v2Z"></path><path fill="none" d="M24 17L8 17 8 15 24 15 24 17z"></path></svg>`;
export default svgResultCarbonIcon;
