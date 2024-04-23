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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="m22.5046,11.6368l-5.9883-3.5c-.1594-.0933-.3381-.1387-.5164-.1367-.1699.002-.3394.0474-.4915.1357l-6.0117,3.5c-.3076.1792-.4968.5083-.4968.8643v7c0,.356.1892.6851.4968.8643l6.0117,3.5c.1555.0903.3176.1357.4915.1357.1743,0,.3604-.0454.5164-.1367l5.9883-3.5c.3069-.1792.4954-.5078.4954-.8633v-7c0-.3555-.1885-.6841-.4954-.8633Zm-6.4939-1.479l4.0076,2.3423-4.0076,2.3423-4.0232-2.3423,4.0232-2.3423Zm-5.0107,4.0815l4,2.3291v4.6855l-4-2.3291v-4.6855Zm6,7.0249v-4.6836l4-2.3379v4.6836l-4,2.3379Z"></path><path d="m16,31c-.1741,0-.3481-.0454-.5039-.1362l-12-7c-.3071-.1792-.4961-.5081-.4961-.8638v-14c0-.3557.189-.6846.4961-.8638L15.4961,1.1362c.1558-.0908.3298-.1362.5039-.1362s.3481.0454.5039.1362l11,6.4166-1.0078,1.7275-10.4961-6.1227-11,6.4166v12.8513l11,6.4166,11-6.4166v-7.4257h2v8c0,.3557-.189.6846-.4961.8638l-12,7c-.1558.0908-.3298.1362-.5039.1362Z"></path></svg>`;
export default svgResultCarbonIcon;
