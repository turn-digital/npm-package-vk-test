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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<circle cx="26" cy="22" r="2"></circle><circle cx="20" cy="22" r="2"></circle><circle cx="14" cy="6" r="2"></circle><circle cx="8" cy="6" r="2"></circle><path d="m8.2339,24c3.8799,0,7.311-2.4731,8.5383-6.1543l2.353-7.0591c.9543-2.8628,3.6233-4.7866,6.6409-4.7866h4.2339v-2h-4.2339c-3.8799,0-7.311,2.4731-8.5383,6.1543l-2.353,7.0591c-.9543,2.8628-3.6233,4.7866-6.6409,4.7866h-4.2339V2h-2v26c0,1.1025.897,2,2,2h26v-2H4v-4h4.2339Z"></path></svg>`;
export default svgResultCarbonIcon;
