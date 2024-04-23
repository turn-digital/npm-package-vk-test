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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M25,29c-1.6543,0-3-1.3458-3-3s1.3457-3,3-3,3,1.3458,3,3-1.3457,3-3,3Zm0-4c-.5515,0-1,.4486-1,1s.4485,1,1,1,1-.4486,1-1-.4485-1-1-1Z"></path><circle cx="20" cy="21" r="2"></circle><path d="M15,19c-1.6543,0-3-1.3458-3-3s1.3457-3,3-3,3,1.3458,3,3-1.3457,3-3,3Zm0-4c-.5515,0-1,.4486-1,1s.4485,1,1,1,1-.4486,1-1-.4485-1-1-1Z"></path><path d="M13,27H4c-1.104-.0013-1.9987-.896-2-2V5c.0013-1.104,.896-1.9987,2-2h7.5857c.5308-.0015,1.0401,.2095,1.4143,.5859l3.4143,3.4141h11.5857c1.104,.0013,1.9987,.896,2,2v7h-2v-7H15.5857l-4-4H4V25H13v2Z"></path></svg>`;
export default svgResultCarbonIcon;
