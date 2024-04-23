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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M8.9141,24.5l4.257-4.2568-1.414-1.4141L7.5,23.0859l-.793-.7929a.9994.9994,0,0,0-1.414,0l-4,4a.9994.9994,0,0,0,0,1.414l3,3a.9995.9995,0,0,0,1.414,0l4-4a.9994.9994,0,0,0,0-1.414ZM5,28.5859,3.4141,27,6,24.4141,7.5859,26Z"></path><path d="M24,30a6.0067,6.0067,0,0,1-6-6,5.84,5.84,0,0,1,.2109-1.5469l-8.664-8.6638A5.8483,5.8483,0,0,1,8,14,5.9757,5.9757,0,0,1,2.4228,5.8164l.5577-1.4219L6.293,7.707a1.0233,1.0233,0,0,0,1.4135,0,.999.999,0,0,0,0-1.4141L4.3936,2.979l1.4233-.5571A5.9772,5.9772,0,0,1,14,8a5.84,5.84,0,0,1-.2109,1.5469l8.664,8.6635A5.8548,5.8548,0,0,1,24,18a5.9755,5.9755,0,0,1,5.5771,8.1836L29.02,27.6055,25.707,24.293a1.0233,1.0233,0,0,0-1.4135,0,.999.999,0,0,0-.0005,1.4141L27.6055,29.02l-1.4219.5579A5.96,5.96,0,0,1,24,30ZM10.0625,11.4763,20.5234,21.9375l-.2392.6094A3.9754,3.9754,0,0,0,23.75,27.9922l-.8711-.8711a2.9992,2.9992,0,0,1,0-4.2424,3.0721,3.0721,0,0,1,4.2427.0005l.8706.8708a3.9759,3.9759,0,0,0-5.4458-3.4658l-.6094.2385-10.46-10.46.2392-.6094A3.9755,3.9755,0,0,0,8.2505,4.0078l.8706.8711a2.9992,2.9992,0,0,1,0,4.2424,3.0721,3.0721,0,0,1-4.2427-.0005L4.0078,8.25a3.975,3.975,0,0,0,5.4453,3.4656Z"></path><path d="M29.1226,2.85a3.0716,3.0716,0,0,0-4.2422,0L17.4,10.33l1.4141,1.414,7.48-7.48a1.0244,1.0244,0,0,1,1.4141,0,1.002,1.002,0,0,1,0,1.4145l-7.48,7.48,1.414,1.4141,7.48-7.4795A3.0031,3.0031,0,0,0,29.1226,2.85Z"></path></svg>`;
export default svgResultCarbonIcon;
