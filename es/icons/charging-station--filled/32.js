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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M29,7V4H27V7H26v6h1V24.5a1.5,1.5,0,0,1-3,0V16a1,1,0,0,0-1-1H19V5a1,1,0,0,0-1-1H5A1,1,0,0,0,4,5V26H2v2H21V26H19V17h3v7.5a3.5,3.5,0,0,0,7,0V13h1V7ZM11.8574,21.5146l-1.7148-1.0292L12.2339,17h-5l3.9087-6.5146,1.7148,1.0292L10.7661,15h5Z"></path><path fill="none" d="M11.857 21.514L10.143 20.486 12.234 17 7.234 17 11.143 10.486 12.857 11.514 10.766 15 15.766 15 11.857 21.514z" data-icon-path="inner-path"></path></svg>`;
export default svgResultCarbonIcon;
