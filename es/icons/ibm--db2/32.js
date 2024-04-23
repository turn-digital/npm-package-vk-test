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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="m16,13c-3.4207,0-6,1.5049-6,3.5v8c0,1.9951,2.5793,3.5,6,3.5s6-1.5049,6-3.5v-8c0-1.9951-2.5793-3.5-6-3.5Zm0,2c2.4814,0,4,.9712,4,1.5s-1.5186,1.5-4,1.5-4-.9712-4-1.5,1.5186-1.5,4-1.5Zm0,11c-2.4814,0-4-.9712-4-1.5v-1.3525c1.0469.5342,2.4331.8525,4,.8525s2.9531-.3184,4-.8525v1.3525c0,.5288-1.5186,1.5-4,1.5Zm0-4c-2.4814,0-4-.9712-4-1.5v-1.3525c1.0469.5342,2.4331.8525,4,.8525s2.9531-.3184,4-.8525v1.3525c0,.5288-1.5186,1.5-4,1.5Z"></path><path d="m30,15.5c0,3.08-2.14,5.65-5.0099,6.3199v-2.0699c1.75-.62,3.0099-2.28,3.0099-4.25,0-2.33-1.83-4.29-4.15-4.4801l-.81-.0599-.1-.8099c-.43-3.5-3.42-6.15-6.94-6.15-3.53,0-6.52,2.65-6.95,6.15l-.1.8099-.81.0599c-2.32.1901-4.14,2.1501-4.14,4.4801,0,1.96,1.25,3.62,2.9901,4.24v2.08c-2.86-.6799-4.9901-3.25-4.9901-6.3199,0-3.1,2.22-5.75,5.2-6.36.86-4.1201,4.52-7.14,8.8-7.14,4.27,0,7.9301,3.0199,8.8,7.14,2.97.61,5.2,3.26,5.2,6.36Z"></path></svg>`;
export default svgResultCarbonIcon;
