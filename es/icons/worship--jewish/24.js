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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M24.291,16l3.585-6.5181A1,1,0,0,0,27,8H19.8911L16.876,2.5181a1,1,0,0,0-1.752,0L12.1089,8H5a1,1,0,0,0-.876,1.4819L7.709,16,4.124,22.5181A1,1,0,0,0,5,24h7.1089l3.0151,5.4819a1,1,0,0,0,1.752,0L19.8911,24H27a1,1,0,0,0,.876-1.4819Zm-5.5823,6L16,26.9248,13.2913,22h-6.6l3.3-6-3.3-6h6.6L16,5.0752,18.7087,10h6.6l-3.3,6,3.3,6Z"></path></svg>`;
export default svgResultCarbonIcon;
