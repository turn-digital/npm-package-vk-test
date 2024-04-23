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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="m23,23c-5.6558,0-7.8577-6.4109-7.9487-6.6837-.0173-.0514-1.8435-5.3163-6.0513-5.3163-2.7571,0-5,2.243-5,5s2.2429,5,5,5c1.5876,0,3.0134-.7322,4.2373-2.1764l1.5259,1.2932c-1.5989,1.8862-3.5916,2.8832-5.7632,2.8832-3.8599,0-7-3.1401-7-7s3.1401-7,7-7c5.6558,0,7.8577,6.4109,7.9487,6.6837.0173.0514,1.8435,5.3163,6.0513,5.3163,2.7571,0,5-2.243,5-5s-2.2429-5-5-5c-1.5876,0-3.0134.7322-4.2373,2.1764l-1.5259-1.2932c1.5989-1.8862,3.5916-2.8832,5.7632-2.8832,3.8599,0,7,3.1401,7,7s-3.1401,7-7,7Z"></path></svg>`;
export default svgResultCarbonIcon;
