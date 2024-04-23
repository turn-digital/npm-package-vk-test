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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="m22.5039,17.6362l-6-3.5c-.1558-.0908-.3298-.1362-.5039-.1362s-.3481.0454-.5039.1362l-6,3.5c-.3071.1792-.4961.5083-.4961.8638v7c0,.3555.189.6846.4961.8638l6,3.5c.1558.0908.3298.1362.5039.1362s.3481-.0454.5039-.1362l6-3.5c.3071-.1792.4961-.5083.4961-.8638v-7c0-.3555-.189-.6846-.4961-.8638Zm-1.5039,6.1978l-2.5317-1.519c.0132-.1045.0317-.207.0317-.3149,0-1.0225-.6187-1.9014-1.5-2.2881v-2.9707l4,2.333v4.7598Zm-6-7.0928v2.9707c-.8813.3867-1.5,1.2656-1.5,2.2881,0,.1079.0186.2104.0317.3149l-2.5317,1.519v-4.7598l4-2.333Zm1,11.1011l-3.9517-2.3052,2.5071-1.5039c.4087.291.9055.4668,1.4446.4668s1.0359-.1758,1.4446-.4668l2.5071,1.5039-3.9517,2.3052Z"></path><path d="m24.8,9.14c-.87-4.12-4.52-7.14-8.8-7.14s-7.93,3.02-8.8,7.14c-2.97.6-5.2,3.26-5.2,6.36,0,3.07,2.14,5.63,5,6.31v-2.11c-1.74-.62-3-2.24-3-4.2,0-2.33,1.82-4.31,4.14-4.49l.82-.06.1-.81c.43-3.5,3.41-6.14,6.94-6.14s6.51,2.64,6.94,6.14l.1.81.82.06c2.32.19,4.14,2.16,4.14,4.49,0,1.95-1.26,3.59-3,4.21v2.11c2.86-.68,5-3.26,5-6.32,0-3.11-2.23-5.76-5.2-6.36Z"></path></svg>`;
export default svgResultCarbonIcon;
