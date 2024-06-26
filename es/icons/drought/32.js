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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M27,18h3V15a4.0045,4.0045,0,0,0-4-4H25V9.5A3.5042,3.5042,0,0,0,21.5,6a3.4556,3.4556,0,0,0-1.5.3511V5.41a3.41,3.41,0,0,0-6.5449-1.3433L11.3408,9H9a5.0059,5.0059,0,0,0-5,5v4H8a5.0059,5.0059,0,0,0,5-5V10.2051l2.293-5.35A1.41,1.41,0,0,1,18,5.41V22H14.6123L11,25.2939,7.3877,22H2v2H6.6123L11,28l4.3877-4H30V22H20V9.5a1.5,1.5,0,0,1,3,0V14A4.0045,4.0045,0,0,0,27,18Zm-2-5h1a2.0023,2.0023,0,0,1,2,2v1H27a2.0023,2.0023,0,0,1-2-2ZM11,13a3.0033,3.0033,0,0,1-3,3H6V14a3.0033,3.0033,0,0,1,3-3h2Z"></path></svg>`;
export default svgResultCarbonIcon;
