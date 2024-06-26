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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="m20,27c-2.9795,0-5.7693-1.1719-7.8555-3.2998l1.4282-1.4001c1.7068,1.7411,3.9895,2.7,6.4272,2.7,4.9626,0,9-4.0374,9-9,0-2.3705-.9138-4.6079-2.5732-6.3004l1.4282-1.4001c2.0281,2.0686,3.145,4.8033,3.145,7.7006,0,6.0654-4.9346,11-11,11Z"></path><circle cx="24" cy="5" r="2"></circle><path d="m20.4141,14.5859l-3-3c-.3774-.3779-.8799-.5859-1.4141-.5859s-1.0366.208-1.4143.5859l-2.9998,3c-.3899.3896-.5859.9019-.5859,1.4141s.196,1.0244.5859,1.4141l2.9998,3c.3777.3779.8801.5859,1.4143.5859s1.0366-.208,1.4141-.5859l3-3c.3899-.3896.5859-.9019.5859-1.4141s-.196-1.0244-.5859-1.4141Zm-4.4141,4.4141l-3-3,3-3,2.9998,3-2.9998,3Z"></path><circle cx="8" cy="27" r="2"></circle><path d="m4.2993,23.855c-2.1277-2.0861-3.2993-4.8757-3.2993-7.855C1,9.9346,5.9346,5,12,5c2.9795,0,5.7693,1.1719,7.8555,3.2998l-1.4282,1.4001c-1.7068-1.7411-3.9895-2.7-6.4272-2.7-4.9626,0-9,4.0374-9,9,0,2.4376.9587,4.7201,2.6997,6.427l-1.4004,1.428Z"></path></svg>`;
export default svgResultCarbonIcon;
