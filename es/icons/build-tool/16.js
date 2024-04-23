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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M28,14h-1V7c0-1.1-0.9-2-2-2h-6v2h6v7h-1c-1.1,0-2,0.9-2,2v9H9.9c-0.4-1.4-1.5-2.5-2.9-2.9V7h6.2l-2.6,2.6L12,11l5-5l-5-5	l-1.4,1.4L13.2,5H7C5.9,5,5,5.9,5,7v15.1c-1.7,0.4-3,2-3,3.9c0,2.2,1.8,4,4,4c1.9,0,3.4-1.3,3.9-3H22v1c0,1.1,0.9,2,2,2h4	c1.1,0,2-0.9,2-2V16C30,14.9,29.1,14,28,14z M6,28c-1.1,0-2-0.9-2-2s0.9-2,2-2c1.1,0,2,0.9,2,2S7.1,28,6,28z M24,28V16h4v12H24z"></path></svg>`;
export default svgResultCarbonIcon;
