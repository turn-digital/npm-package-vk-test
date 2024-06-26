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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M16 22H18V24H16z" transform="rotate(-90 17 23)"></path><path d="M18,28V26H16v2H4V2H2V28a2,2,0,0,0,2,2H30V28Z"></path><path d="M26.0532,19.6787A3.44,3.44,0,0,1,23,22c-2.17,0-3.3115-3.333-4.52-6.8623-.3557-1.0386-.7239-2.1094-1.1382-3.1377H18V10H16.4221C15.2124,7.7148,13.5811,6,11,6,7.3218,6,6.1016,9.5332,6.0513,9.6836l1.8955.6377A3.44,3.44,0,0,1,11,8c2.92,0,4.2764,3.958,5.5874,7.7861.2544.7422.5105,1.4893.7813,2.2139H16v2h2.2019c1.0828,2.2886,2.4959,4,4.7981,4,3.6782,0,4.8984-3.5332,4.9487-3.6836Z"></path><path d="M16 6H18V8H16z" transform="rotate(-90 17 7)"></path><path d="M16 2H18V4H16z" transform="rotate(-90 17 3)"></path></svg>`;
export default svgResultCarbonIcon;
