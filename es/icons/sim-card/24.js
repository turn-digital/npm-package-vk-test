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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M21,9H8a2.0023,2.0023,0,0,0-2,2V21a2.0023,2.0023,0,0,0,2,2H21a2.0023,2.0023,0,0,0,2-2V11A2.0023,2.0023,0,0,0,21,9Zm0,4H18V11h3Zm-3,2h3v2H18Zm-2-4V21H13V14a1,1,0,0,0-1-1H8V11Zm-5,6H8V15h3ZM8,19h3v2H8Zm10,2V19h3v2Z"></path><path d="M23.5317,27H4a2.0021,2.0021,0,0,1-2-2V7A2.0021,2.0021,0,0,1,4,5H28a2.0021,2.0021,0,0,1,2,2V19.6379a2.0044,2.0044,0,0,1-.4639,1.2808L25.0679,26.28A1.9944,1.9944,0,0,1,23.5317,27ZM4,7V25H23.5317L28,19.6379V7Z"></path></svg>`;
export default svgResultCarbonIcon;
