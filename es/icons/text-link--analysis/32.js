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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M8 10H16V12H8zM8 6H20V8H8zM8 2H20V4H8z"></path><path d="M4.7111,28l5.6312-9.9961,7.4341,6.49A2,2,0,0,0,20.86,23.96l6.9707-10.4034-1.6622-1.1132-7,10.4472-.07.1035-7.4345-6.4907a2.0032,2.0032,0,0,0-3.0806.5308L4,25.1826V2H2V28a2.0023,2.0023,0,0,0,2,2H30V28Z"></path></svg>`;
export default svgResultCarbonIcon;
