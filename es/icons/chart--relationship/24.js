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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M26,6a3.9963,3.9963,0,0,0-3.8579,3H17.9305A7.9964,7.9964,0,1,0,9,17.9307v4.2114a4,4,0,1,0,2,0V17.9307a7.951,7.951,0,0,0,3.8976-1.6192l3.6693,3.67A3.9529,3.9529,0,0,0,18,22a4,4,0,1,0,4-4,3.9521,3.9521,0,0,0-2.019.5669l-3.6694-3.6694A7.9493,7.9493,0,0,0,17.9305,11h4.2116A3.9934,3.9934,0,1,0,26,6ZM12,26a2,2,0,1,1-2-2A2.0023,2.0023,0,0,1,12,26ZM10,16a6,6,0,1,1,6-6A6.0066,6.0066,0,0,1,10,16Zm14,6a2,2,0,1,1-2-2A2.0023,2.0023,0,0,1,24,22Zm2-10a2,2,0,1,1,2-2A2.0023,2.0023,0,0,1,26,12Z"></path></svg>`;
export default svgResultCarbonIcon;
