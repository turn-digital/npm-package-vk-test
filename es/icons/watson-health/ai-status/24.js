/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { svg } from 'lit';
import spread from '../../../globals/directives/spread';
const svgResultCarbonIcon = ({ children, ...attrs } = {}) =>
  svg`<svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" ...="${spread(
    attrs
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M11 24H21V26H11zM13 28H19V30H13zM23.04 16a9.4858 9.4858 0 01-1.8623 2.1426C20.1069 19.1348 19 20.1611 19 22h2c0-.9194.5264-1.45 1.5352-2.3857A9.9838 9.9838 0 0025.2756 16zM20 14a1 1 0 01-.8945-.5527L17.3818 10H14V8h4a1 1 0 01.8945.5527L20 10.7639l3.1055-6.2112a1.0416 1.0416 0 011.789 0L26.6182 8H30v2H26a1 1 0 01-.8945-.5527L24 7.2361l-3.1055 6.2112A1 1 0 0120 14z"></path><path d="M10.8145,18.1406A7.1851,7.1851,0,0,1,8,12a8.0092,8.0092,0,0,1,8-8V2A10.0111,10.0111,0,0,0,6,12a9.1793,9.1793,0,0,0,3.46,7.6162C10.4717,20.5508,11,21.0815,11,22h2C13,20.16,11.8892,19.1338,10.8145,18.1406Z"></path></svg>`;
export default svgResultCarbonIcon;