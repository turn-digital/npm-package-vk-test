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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<circle cx="16" cy="9" r="2"></circle><circle cx="16" cy="16" r="2"></circle><path d="m18.8157,26c-.302-.8472-.9685-1.5137-1.8157-1.8159v-2.1841h3c.2969,0,.5781-.1318.7683-.3599l5-6c.1982-.2378.2751-.5547.2078-.8569l-2-9c-.0696-.3145-.2864-.5757-.5823-.7021l-7-3c-.1257-.0542-.2598-.0811-.3938-.0811s-.2681.0269-.3938.0811l-7.0015,3c-.2959.1265-.5127.3877-.5825.7021l-1.9985,9c-.0671.3027.0098.6191.208.8569l5,6c.1902.228.4714.3599.7683.3599h3v2.1846c-.8472.3018-1.5137.9683-1.8157,1.8154H4v2h9.1843c.4141,1.1611,1.5137,2,2.8157,2s2.4016-.8389,2.8157-2h9.1843v-2h-9.1843Zm-10.7329-11.2627l1.7808-8.02,6.1365-2.6294,6.135,2.6294,1.7822,8.02-4.3855,5.2627h-7.0635l-4.3855-5.2627Zm7.9172,13.2627c-.5515,0-1-.4487-1-1s.4485-1,1-1,1,.4487,1,1-.4485,1-1,1Z"></path></svg>`;
export default svgResultCarbonIcon;