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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M24,26a3,3,0,1,0-2.8164-4H13v1a5,5,0,1,1-5-5V16a7,7,0,1,0,6.9287,8h6.2549A2.9914,2.9914,0,0,0,24,26Z"></path><path d="M24,16a7.024,7.024,0,0,0-2.57.4873l-3.1656-5.5395a3.0469,3.0469,0,1,0-1.7326.9985l4.1189,7.2085.8686-.4976a5.0006,5.0006,0,1,1-1.851,6.8418L17.937,26.501A7.0005,7.0005,0,1,0,24,16Z"></path><path d="M8.532,20.0537a3.03,3.03,0,1,0,1.7326.9985C11.74,18.47,13.86,14.7607,13.89,14.708l.4976-.8682-.8677-.497a5,5,0,1,1,6.812-1.8438l1.7315,1.002a7.0008,7.0008,0,1,0-10.3462,2.0356c-.457.7427-1.1021,1.8716-2.0737,3.5728Z"></path></svg>`;
export default svgResultCarbonIcon;