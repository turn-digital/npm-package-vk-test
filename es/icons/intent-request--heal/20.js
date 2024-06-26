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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M27,20c-0.8,0-1.5,0.3-2.1,0.9l-0.4,0.5l-0.4-0.5C23.5,20.3,22.7,20,22,20s-1.5,0.3-2.1,0.9c-1.2,1.2-1.2,3.1,0,4.3l4.6,4.8	l4.6-4.8c1.2-1.2,1.2-3.1,0-4.3C28.6,20.3,27.8,20,27,20L27,20z"></path><path d="M16.6,28.6L4,16L16,4l12.6,12.6l1.4-1.4L17.5,2.6c-0.8-0.8-2.1-0.8-2.9,0L2.6,14.5c-0.8,0.8-0.8,2.1,0,2.9L15.1,30	L16.6,28.6z"></path></svg>`;
export default svgResultCarbonIcon;
