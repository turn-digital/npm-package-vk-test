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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M26,22a3.9583,3.9583,0,0,0-2.02.5659L17.4141,16,23.981,9.4331A3.9521,3.9521,0,0,0,26,10a4,4,0,1,0-4-4,3.951,3.951,0,0,0,.5669,2.019L16,14.5859,9.4343,8.02A3.9577,3.9577,0,0,0,10,6a4,4,0,1,0-4,4,3.9583,3.9583,0,0,0,2.02-.5659L14.5859,16,8.019,22.5669A3.9521,3.9521,0,0,0,6,22a4,4,0,1,0,4,4,3.951,3.951,0,0,0-.5669-2.019L16,17.4141,22.5657,23.98A3.9577,3.9577,0,0,0,22,26a4,4,0,1,0,4-4ZM26,4a2,2,0,1,1-2,2A2.0023,2.0023,0,0,1,26,4ZM6,28a2,2,0,1,1,2-2A2.0023,2.0023,0,0,1,6,28Z"></path></svg>`;
export default svgResultCarbonIcon;
