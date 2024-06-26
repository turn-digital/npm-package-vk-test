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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<circle cx="24" cy="21" r="2"></circle><path d="M24,31l-4.7788-6.4019A5.9354,5.9354,0,0,1,18,21a6,6,0,0,1,12,0,5.9407,5.9407,0,0,1-1.2246,3.6028Zm0-14a4.0045,4.0045,0,0,0-4,4,3.9572,3.9572,0,0,0,.82,2.3972L24,27.6567l3.1763-4.2548A3.9627,3.9627,0,0,0,28,21,4.0045,4.0045,0,0,0,24,17Z"></path><path d="M25,5H22V4a2.0058,2.0058,0,0,0-2-2H12a2.0058,2.0058,0,0,0-2,2V5H7A2.0058,2.0058,0,0,0,5,7V28a2.0058,2.0058,0,0,0,2,2h9V28H7V7h3v3H22V7h3v5h2V7A2.0058,2.0058,0,0,0,25,5ZM20,8H12V4h8Z"></path></svg>`;
export default svgResultCarbonIcon;
