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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M12 11.03L12 15.03 10 15.03 10 11.03 8 11.03 8 17.03 12 17.03 12 21.03 14 21.03 14 11.03 12 11.03zM24.19 11.03L22 11.03 19 15.42 19 11.03 17 11.03 17 21.03 19 21.03 19 18.3 19.91 16.97 22 21.03 24.19 21.03 21.2 15.41 24.19 11.03z"></path><path d="M28,26H4a2,2,0,0,1-2-2V8A2,2,0,0,1,4,6H28a2,2,0,0,1,2,2V24A2,2,0,0,1,28,26ZM4,8V24H28V8Z"></path></svg>`;
export default svgResultCarbonIcon;
