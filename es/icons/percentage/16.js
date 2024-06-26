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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M9,14a5,5,0,1,1,5-5A5.0055,5.0055,0,0,1,9,14ZM9,6a3,3,0,1,0,3,3A3.0033,3.0033,0,0,0,9,6Z"></path><path d="M0.029 15H31.97V17H0.029z" transform="rotate(-45 16 16)"></path><path d="M23,28a5,5,0,1,1,5-5A5.0055,5.0055,0,0,1,23,28Zm0-8a3,3,0,1,0,3,3A3.0033,3.0033,0,0,0,23,20Z"></path></svg>`;
export default svgResultCarbonIcon;
