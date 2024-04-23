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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M11.5 11A2.5 2.5 0 1014 13.5 2.5 2.5 0 0011.5 11zM20.5 11A2.5 2.5 0 1023 13.5 2.5 2.5 0 0020.5 11z"></path><path d="M30,16A14,14,0,1,0,8.8994,28.042l.0156.1562A1.993,1.993,0,0,0,10.9048,30h10.19a1.9929,1.9929,0,0,0,1.99-1.8008l.0156-.1572A13.9674,13.9674,0,0,0,30,16ZM16,4A11.99,11.99,0,0,1,27.97,15.397L22.7637,18H9.2363L4.0305,15.397A11.99,11.99,0,0,1,16,4ZM4.12,17.6777l3.94,1.97.5813,5.81A11.97,11.97,0,0,1,4.12,17.6777ZM21.0947,28H10.9053l-.8-8h11.79Zm2.2644-2.542.5811-5.81,3.94-1.97A11.9712,11.9712,0,0,1,23.3591,25.458Z"></path></svg>`;
export default svgResultCarbonIcon;