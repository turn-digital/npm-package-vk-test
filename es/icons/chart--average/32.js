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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M23,24c-3.5991,0-5.0293-4.1758-6.4126-8.2139C15.2764,11.9583,13.92,8,11,8a3.44,3.44,0,0,0-3.0532,2.3215L6.0513,9.6838C6.1016,9.5334,7.3218,6,11,6c4.3491,0,6.0122,4.8547,7.48,9.1379C19.6885,18.6667,20.83,22,23,22a3.44,3.44,0,0,0,3.0532-2.3215l1.8955.6377C27.8984,20.4666,26.6782,24,23,24Z"></path><path d="M4,28V17H6V15H4V2H2V28a2,2,0,0,0,2,2H30V28Z"></path><path d="M8 15H10V17H8zM12 15H14V17H12zM20 15H22V17H20zM24 15H26V17H24zM28 15H30V17H28z"></path></svg>`;
export default svgResultCarbonIcon;
