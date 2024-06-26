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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M27,17A11.0109,11.0109,0,0,1,17,27.9492V14h6V12H17V9.8579a4,4,0,1,0-2,0V12H9v2h6V27.9492A11.0109,11.0109,0,0,1,5,17H3a13,13,0,0,0,26,0ZM14,6a2,2,0,1,1,2,2A2.0023,2.0023,0,0,1,14,6Z"></path></svg>`;
export default svgResultCarbonIcon;
