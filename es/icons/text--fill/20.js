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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M4 26H28V30H4z"></path><path d="M26,14.54a1,1,0,0,0-.25-.69L17.17,4.33A1.09,1.09,0,0,0,17,4.2V2H15V5L4.32,14.74a1,1,0,0,0-.06,1.41l8.57,9.52a1,1,0,0,0,.69.33h.05a1,1,0,0,0,.68-.26L24,16.8V21a1,1,0,0,0,2,0V14.57S26,14.55,26,14.54Zm-12.35,9-7.23-8L15,7.67V12h2V7.13l6.59,7.33Z"></path></svg>`;
export default svgResultCarbonIcon;
