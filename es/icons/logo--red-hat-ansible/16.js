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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M21.9104,20.5859h0l-5-11c-.1577-.3452-.5061-.5859-.9104-.5859s-.7529,.2407-.9104,.5859l-5,11c-.0576,.1265-.0896,.2661-.0896,.4141,0,.5522,.4478,1,1,1,.4043,0,.7527-.2407,.9104-.5859l1.9985-4.3965,6.4978,4.7876c.166,.1226,.3711,.1948,.5933,.1948,.5522,0,1-.4478,1-1,0-.1479-.032-.2881-.0896-.4141Zm-5.9104-8.1689l2.499,5.498-3.7441-2.7588,1.2451-2.7393Z"></path><path d="M16,30c-7.7197,0-14-6.2803-14-14S8.2803,2,16,2s14,6.2803,14,14-6.2803,14-14,14Zm0-26c-6.6167,0-12,5.3833-12,12s5.3833,12,12,12,12-5.3833,12-12-5.3833-12-12-12Z"></path></svg>`;
export default svgResultCarbonIcon;
