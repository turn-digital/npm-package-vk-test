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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M22 2L22 4 26.6 4 20 10.6 21.4 12 28 5.4 28 10 30 10 30 2 22 2zM19 16L19 18.7 16.5 18 16 19.9 18.4 20.6 17 23 18.7 24 20 21.8 21.3 24 23 23 21.6 20.6 24 19.9 23.5 18 21 18.7 21 16 19 16zM13 16L13 13 16 13 16 11 13 11 13 8 11 8 11 11 8 11 8 13 11 13 11 16 13 16z"></path><path d="M26,26H6V6H19V4H6A2.0059,2.0059,0,0,0,4,6V26a2.0059,2.0059,0,0,0,2,2H26a2.0059,2.0059,0,0,0,2-2V13H26Z"></path></svg>`;
export default svgResultCarbonIcon;
