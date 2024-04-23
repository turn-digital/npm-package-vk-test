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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M23 22L30 27 23 32 23 22z"></path><path d="M26,3H6c-1.6543,0-3,1.3457-3,3V26c0,1.6543,1.3457,3,3,3h11v-9h12V6c0-1.6543-1.3457-3-3-3ZM6,5H26c.5515,0,1,.4482,1,1v3H5v-3c0-.5518,.4485-1,1-1Zm9,6v7H5v-7H15Zm0,16H6c-.5515,0-1-.4482-1-1v-6H15v7Zm2-9v-7h10v7h-10Z"></path></svg>`;
export default svgResultCarbonIcon;
