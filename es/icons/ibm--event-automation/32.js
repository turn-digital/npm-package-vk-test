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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<circle cx="4" cy="22" r="2"></circle><path d="m13.5,30c-3.0586,0-5.9485-1.4867-7.7305-3.9771l1.6265-1.1638c1.4075,1.9667,3.6892,3.1409,6.104,3.1409,3.969,0,7.2578-3.1002,7.4873-7.0579l1.9966.1157c-.2908,5.0143-4.4565,8.9421-9.4839,8.9421Z"></path><circle cx="28" cy="23" r="2"></circle><path d="M30.6411 19.0948l-1.9243-.5449c.188-.6638.2832-1.3535.2832-2.0499 0-4.1355-3.3645-7.5-7.5-7.5-1.0769 0-2.1157.223-3.0876.6628l-.8247-1.822c1.2329-.558 2.5491-.8408 3.9124-.8408 5.2383 0 9.5 4.2617 9.5 9.5 0 .8807-.1208 1.7537-.3589 2.5948zM20.4141 14.5859l-3-3c-.3774-.3779-.8799-.5859-1.4141-.5859s-1.0366.208-1.4143.5859l-2.9998 3c-.3899.3896-.5859.9019-.5859 1.4141s.196 1.0244.5859 1.4141l2.9998 3c.3777.3779.8801.5859 1.4143.5859s1.0366-.208 1.4141-.5859l3-3c.3899-.3896.5859-.9019.5859-1.4141s-.196-1.0244-.5859-1.4141zm-4.4141 4.4141l-3-3 3-3 2.9998 3-2.9998 3z"></path><circle cx="16" cy="3" r="2"></circle><path d="m8.0254,19.8821c-3.0999-1.6578-5.0254-4.8696-5.0254-8.3821C3,6.4729,6.9277,2.307,11.9421,2.0161l.1157,1.9966c-3.9578.2297-7.0579,3.5186-7.0579,7.4873,0,2.7732,1.5208,5.3092,3.9688,6.6184l-.9434,1.7637Z"></path></svg>`;
export default svgResultCarbonIcon;
