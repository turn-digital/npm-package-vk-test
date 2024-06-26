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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<circle cx="7" cy="19" r="1"></circle><circle cx="16" cy="11" r="1"></circle><circle cx="25" cy="19" r="1"></circle><circle cx="10" cy="14" r="1"></circle><path d="M30 20h-2c0-1.2616-.1946-2.5042-.5786-3.6929l1.9033-.6146c.448 1.3876.6753 2.8369.6753 4.3075zM29.8508 8.9775l-2.4368 2.4365-.0005-.0005c-.3621.3623-.8621.5864-1.4136.5864-1.103 0-2-.897-2-2 0-.5518.2241-1.0518.5864-1.4136l-.0005-.0005 2.4368-2.4365c-.3284-.0879-.667-.1494-1.0227-.1494-2.2056 0-4 1.7944-4 4 0 .7393.2153 1.4238.5669 2.019l-4.5479 4.5479c-.595-.3516-1.2795-.5669-2.019-.5669-2.2056 0-4 1.7944-4 4s1.7944 4 4 4 4-1.7944 4-4c0-.7397-.2153-1.4243-.5669-2.019l4.5479-4.5479c.595.3516 1.2795.5669 2.019.5669 2.2056 0 4-1.7944 4-4 0-.3555-.0615-.6943-.1492-1.0225zm-13.8508 13.0225c-1.103 0-2-.8975-2-2s.897-2 2-2 2 .8975 2 2-.897 2-2 2zM4 20h-2c0-7.7196 6.2803-14 14-14 1.4707 0 2.9199.2272 4.3074.6754l-.6147 1.9031c-1.1885-.3838-2.4309-.5785-3.6926-.5785-6.6167 0-12 5.3832-12 12z"></path></svg>`;
export default svgResultCarbonIcon;
