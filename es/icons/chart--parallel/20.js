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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M28,2V5.3071l-6,2.25V2H20V7.5229l-8-3.2V2H10V4.4458l-6,3.75V2H2V30H4V27.6182l6-3V30h2V24.3442l8,2.4V30h2V26.5542l6-3.75V30h2V2Zm0,5.4429V12.5L22,17V9.6929ZM20,9.6768v7.5571l-8-4.8V6.4771ZM10,6.8042v5.7417l-6,5.25V10.5542ZM4,25.3818V20.4541l6-5.25v7.1777Zm8-3.1259v-7.49l8,4.8v5.0894Zm10,1.94V19.5L28,15v5.4458Z"></path></svg>`;
export default svgResultCarbonIcon;
