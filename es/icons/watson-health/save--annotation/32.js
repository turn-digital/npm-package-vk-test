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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M21.56,15.1l-3.48-4.35A2,2,0,0,0,16.52,10H4a2,2,0,0,0-2,2V28a2,2,0,0,0,2,2H20a2,2,0,0,0,2-2V16.35A2,2,0,0,0,21.56,15.1ZM9,12h6v3H9Zm6,16H9V22h6Zm2,0V22a2,2,0,0,0-2-2H9a2,2,0,0,0-2,2v6H4V12H7v3a2,2,0,0,0,2,2h6a2,2,0,0,0,2-2V12.6l3,3.75V28Z"></path><path d="M28,20H25V18h3V4H8V7H6V4A2,2,0,0,1,8,2H28a2,2,0,0,1,2,2V18A2,2,0,0,1,28,20Z"></path><path d="M20 6H26V8H20zM22 10H26V12H22z"></path></svg>`;
export default svgResultCarbonIcon;
