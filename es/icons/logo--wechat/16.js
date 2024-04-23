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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path fill-rule="evenodd" d="M27.0857,24.7792A6.6179,6.6179,0,0,0,30,19.4662c0-3.88-3.7765-7.0269-8.4338-7.0269s-8.4339,3.1465-8.4339,7.0269,3.7765,7.028,8.4339,7.028a9.9547,9.9547,0,0,0,2.7533-.385l.2473-.0374a.8923.8923,0,0,1,.448.13l1.8469,1.0664.1621.0525a.2813.2813,0,0,0,.2812-.2812l-.0455-.2053-.38-1.4175-.0292-.18A.56.56,0,0,1,27.0857,24.7792ZM12.1208,4.68C6.5313,4.68,2,8.4552,2,13.1137a7.9386,7.9386,0,0,0,3.4965,6.3746.6713.6713,0,0,1,.2835.55l-.035.2147-.4562,1.701L5.234,22.2a.3384.3384,0,0,0,.3372.3383l.196-.063,2.2155-1.28a1.0584,1.0584,0,0,1,.5366-.1552l.2975.0443a11.9674,11.9674,0,0,0,3.304.4632l.5554-.014a6.5153,6.5153,0,0,1-.3395-2.0662c0-4.2478,4.1323-7.6918,9.2295-7.6918l.55.014C21.3538,7.761,17.169,4.68,12.1208,4.68Zm6.6337,13.6629a1.1247,1.1247,0,1,1,1.1247-1.1247A1.1243,1.1243,0,0,1,18.7545,18.3427Zm5.6233,0a1.1247,1.1247,0,1,1,1.1235-1.1247A1.1245,1.1245,0,0,1,24.3778,18.3427ZM8.7468,11.7638a1.3493,1.3493,0,1,1,1.35-1.3486A1.3485,1.3485,0,0,1,8.7468,11.7638Zm6.7469,0a1.3493,1.3493,0,1,1,1.35-1.3486A1.3486,1.3486,0,0,1,15.4937,11.7638Z"></path></svg>`;
export default svgResultCarbonIcon;
