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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M30 24L26 24 26 20 24 20 24 24 20 24 20 26 24 26 24 30 26 30 26 26 30 26z"></path><path d="M15.4,30L5,23.8c-0.6-0.4-1-1-1-1.7V9.9c0-0.7,0.4-1.4,1-1.7l10-5.9C15.3,2.1,15.6,2,16,2c0.4,0,0.7,0.1,1,0.3l10,5.9	c0.6,0.4,1,1,1,1.7V16h-2V9.9L16,4L6,9.9v12.2l10.5,6.2L15.4,30z"></path></svg>`;
export default svgResultCarbonIcon;
