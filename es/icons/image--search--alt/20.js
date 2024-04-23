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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M10,16a5.9908,5.9908,0,0,0,9.4712,4.8853L24.5859,26,26,24.5859l-5.115-5.1147A5.997,5.997,0,1,0,10,16Zm2,0a4,4,0,1,1,4,4A4.0045,4.0045,0,0,1,12,16Z"></path><path d="M29,7H22.54L20.83,4.45A.9946.9946,0,0,0,20,4H12a.9946.9946,0,0,0-.83.45L9.46,7H3A1.0031,1.0031,0,0,0,2,8V25a1.0031,1.0031,0,0,0,1,1h9V24H4V9h6a.9946.9946,0,0,0,.83-.45L12.54,6h6.92l1.71,2.55A.9946.9946,0,0,0,22,9h6V21h2V8A1.0031,1.0031,0,0,0,29,7Z"></path></svg>`;
export default svgResultCarbonIcon;
