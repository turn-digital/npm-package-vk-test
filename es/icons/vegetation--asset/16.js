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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<circle cx="21.5" cy="10.5" r="1.5"></circle><path d="M28.5 1a2.4518 2.4518 0 00-1.2061.3105L18.9834 5.6084l.0027.0054a5.497 5.497 0 107.3257 7.5444l.0031.0015 4.4-8.5A2.5 2.5 0 0028.5 1zm-7 13A3.5 3.5 0 1125 10.5 3.5042 3.5042 0 0121.5 14zM28.9414 3.7354L26.5571 8.3408A5.5279 5.5279 0 0023.658 5.4424l4.5949-2.377A.5165.5165 0 0129 3.5.4985.4985 0 0128.9414 3.7354zM19 20h7V18H17V28a2.0027 2.0027 0 002 2h3V28H19zM12 30H9V28h3V15.5664L8.4854 13.4575l1.0292-1.7148 3.5147 2.1084A2.0115 2.0115 0 0114 15.5664V28A2.0024 2.0024 0 0112 30z"></path><path d="M17.3079,2.2852A9.4882,9.4882,0,0,0,15,2,8.0275,8.0275,0,0,0,8.0786,6.001C8.0525,6,8.0264,6,8,6A6,6,0,0,0,8,18V16A4,4,0,0,1,8,8a2.7009,2.7009,0,0,1,.387.0391l.863.1142.3086-.6675A6.0192,6.0192,0,0,1,15,4a7.499,7.499,0,0,1,1.731.2148Z"></path></svg>`;
export default svgResultCarbonIcon;
