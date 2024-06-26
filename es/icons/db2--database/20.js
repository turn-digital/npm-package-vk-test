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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M16,3c-5.2979,0-11,1.252-11,4V25c0,2.748,5.7021,4,11,4s11-1.252,11-4V7c0-2.748-5.7021-4-11-4Zm0,2c5.7976,0,8.7949,1.4341,8.9968,2-.2019,.5659-3.1992,2-8.9968,2-5.8413,0-8.8394-1.4556-9-1.9824v-.0049c.1606-.5571,3.1587-2.0127,9-2.0127ZM7,9.4277c2.1279,1.0674,5.6426,1.5723,9,1.5723s6.8721-.5049,9-1.5723v3.5596c-.1606,.5571-3.1587,2.0127-9,2.0127-5.8501,0-8.8491-1.46-9-2v-3.5723Zm0,6c2.1279,1.0674,5.6426,1.5723,9,1.5723s6.8721-.5049,9-1.5723v3.5596c-.1606,.5571-3.1587,2.0127-9,2.0127-5.8501,0-8.8491-1.46-9-2v-3.5723Zm9,11.5723c-5.8501,0-8.8491-1.46-9-2v-3.5723c2.1279,1.0674,5.6426,1.5723,9,1.5723s6.8721-.5049,9-1.5723v3.5596c-.1606,.5571-3.1587,2.0127-9,2.0127Z"></path></svg>`;
export default svgResultCarbonIcon;
