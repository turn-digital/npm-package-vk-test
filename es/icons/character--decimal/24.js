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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M21 15H23V17H21z"></path><path d="M24 23H20a2.0023 2.0023 0 01-2-2V11a2.002 2.002 0 012-2h4a2.0023 2.0023 0 012 2V21A2.0027 2.0027 0 0124 23zM20 11h0V21h4V11zM11 15H13V17H11z"></path><path d="M14 23H10a2.0023 2.0023 0 01-2-2V11a2.002 2.002 0 012-2h4a2.0023 2.0023 0 012 2V21A2.0027 2.0027 0 0114 23zM10 11h0V21h4V11zM4 21H6V23H4z"></path></svg>`;
export default svgResultCarbonIcon;
