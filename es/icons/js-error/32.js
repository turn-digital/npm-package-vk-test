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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M20.3335 30h-2.667c-.9189 0-1.6665-.7476-1.6665-1.6665v-2.3335h2v2h2v-8h2v8.3335c0 .9189-.7476 1.6665-1.6665 1.6665zM28.3335 30h-4.3335v-2h4v-2h-2c-1.103 0-2-.897-2-2v-2.3335c0-.9189.7476-1.6665 1.6665-1.6665h4.3335v2h-4v2h2c1.103 0 2 .897 2 2v2.3335c0 .9189-.7476 1.6665-1.6665 1.6665zM16 18c-.8284 0-1.5.6716-1.5 1.5s.6716 1.5 1.5 1.5 1.5-.6716 1.5-1.5-.6716-1.5-1.5-1.5h0zM15 7H17V16H15z"></path><path d="m14,26h-4.5c-.3538,0-.6809-.1868-.8608-.4912L2.1392,14.5088c-.0928-.1569-.1392-.3329-.1392-.5088s.0464-.3519.1392-.5088L8.6392,2.4912c.1799-.3044.5071-.4912.8608-.4912h13c.3538,0,.6809.1868.8608.4912l6.5,11c.0928.1569.1392.3328.1392.5088s-.0464.3519-.1392.5088l-2,3.3845-1.7217-1.0173,1.6992-2.876-5.9089-10h-11.8589l-5.9089,10,5.9089,10h3.9294v2Z"></path></svg>`;
export default svgResultCarbonIcon;
