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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M26 13H30V15H26z"></path><path d="M23.121 5.879H27.121V7.879H23.121z" transform="rotate(-45 25.121 6.879)"></path><path d="M24.121 19.121H26.121V23.121H24.121z" transform="rotate(-45 25.121 21.121)"></path><path d="M17 2H19V6H17zM18 8a6.0365 6.0365 0 00-1 .09v2.0518A3.9567 3.9567 0 0118 10a4 4 0 010 8v2A6 6 0 0018 8zM10 20.1839V7H8V20.1839a3 3 0 102 0z"></path><path d="M9,30A6.9931,6.9931,0,0,1,4,18.1108V7A5,5,0,0,1,14,7V18.1108A6.9931,6.9931,0,0,1,9,30ZM9,4A3.0033,3.0033,0,0,0,6,7V18.9834l-.332.2983a5,5,0,1,0,6.664,0L12,18.9834V7A3.0033,3.0033,0,0,0,9,4Z"></path></svg>`;
export default svgResultCarbonIcon;
