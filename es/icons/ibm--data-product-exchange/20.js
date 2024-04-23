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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="m24,21v2h1.7483c-2.2363,3.1196-5.8357,5-9.7483,5-6.6169,0-12-5.3833-12-12h-2c0,7.7197,6.2803,14,14,14,4.355,0,8.3743-2.001,11-5.3452v1.3452h2v-5h-5Z"></path><path d="m22.5046,11.6367l-5.9883-3.5c-.1594-.0933-.3381-.1387-.5164-.1367-.1699.002-.3394.0474-.4915.1357l-6.0117,3.5c-.3076.1792-.4968.5083-.4968.8643v7c0,.356.1892.6851.4968.8643l6.0117,3.5c.1555.0903.3176.1357.4915.1357.1743,0,.3604-.0454.5164-.1367l5.9883-3.5c.3069-.1792.4954-.5078.4954-.8633v-7c0-.3555-.1885-.6841-.4954-.8633Zm-6.4939-1.479l4.0076,2.3423-4.0076,2.3423-4.0232-2.3423,4.0232-2.3423Zm-5.0107,4.0815l4,2.3291v4.6855l-4-2.3291v-4.6855Zm6,7.0249v-4.6836l4-2.3379v4.6836l-4,2.3379Z"></path><path d="m16,2c-4.355,0-8.3743,2.001-11,5.3452v-1.3452h-2v5h5v-2h-1.7483c2.2363-3.1196,5.8357-5,9.7483-5,6.6169,0,12,5.3833,12,12h2c0-7.7197-6.2803-14-14-14Z"></path></svg>`;
export default svgResultCarbonIcon;
