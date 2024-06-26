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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M22 30H17a7.0078 7.0078 0 01-7-7 6.6832 6.6832 0 012.0244-4.6967A6.7935 6.7935 0 0010.0093 18C5.0425 18.0466 4 24.5513 4 30H2C2 18.4907 6.3452 16.0342 9.9907 16a10.0717 10.0717 0 014.4785 1.117 1 1 0 01.0616 1.73A4.8773 4.8773 0 0017 28h5zM17 8H19V16H17z"></path><path d="M28,5.4141,26.5859,4,24.3242,6.2617A9.95,9.95,0,0,0,19,4.0508V2H17V4.0508A10.0132,10.0132,0,0,0,8,14h2a8,8,0,1,1,8,8v2A9.9928,9.9928,0,0,0,25.7383,7.6758Z"></path></svg>`;
export default svgResultCarbonIcon;
