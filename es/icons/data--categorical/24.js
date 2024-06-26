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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M29 30h-10c-.5522 0-1-.4478-1-1v-10c0-.5522.4478-1 1-1h10c.5522 0 1 .4478 1 1v10c0 .5522-.4478 1-1 1zm-9-2h8v-8h-8v8zM8 30c-3.3083 0-6-2.6917-6-6s2.6917-6 6-6 6 2.6917 6 6-2.6917 6-6 6zm0-10c-2.2056 0-4 1.7944-4 4s1.7944 4 4 4 4-1.7944 4-4-1.7944-4-4-4zM22 14h-12c-.3604 0-.6926-.1938-.8701-.5073s-.1729-.6982.0127-1.0072L15.1446 2.4822c.1937-.3229.5246-.4822.8554-.4822s.6617.1593.8554.4822l6.002 10.0033c.1855.309.1902.6937.0127 1.0072s-.5098.5073-.8701.5073zm-10.2339-2h8.4678l-4.2339-7.0564-4.2339 7.0564z"></path></svg>`;
export default svgResultCarbonIcon;
