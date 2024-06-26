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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M8 20H4.73A1.9735 1.9735 0 003 19a2 2 0 000 4A1.9735 1.9735 0 004.73 22H8zM29 9a1.9735 1.9735 0 00-1.73 1H24v2h3.27A1.9991 1.9991 0 1029 9z"></path><path d="M25.4141 5L21 .5859 16.5859 5 20 8.4141V18h2V8.4141zM21 3.4141L22.5859 5 21 6.5859 19.4141 5zM12 23.5859V14H10v9.5859L6.5859 27 11 31.4141 15.4141 27zM9.4141 27L11 25.4141 12.5859 27 11 28.5859z"></path><path d="M18,10H8.4141L5,6.5859.5859,11,5,15.4141,8.4141,12H18ZM5,12.5859,3.4141,11,5,9.4141,6.5859,11Z"></path><path d="M13 3A2 2 0 009 3 1.9733 1.9733 0 0010 4.73V8h2V4.73A1.9733 1.9733 0 0013 3zM22 27.2705V24H20v3.27a2 2 0 102 0z"></path><path d="M31.4141,21,27,16.5859,23.5859,20H14v2h9.5859L27,25.4141ZM27,19.4141,28.5859,21,27,22.5859,25.4141,21Z"></path></svg>`;
export default svgResultCarbonIcon;
