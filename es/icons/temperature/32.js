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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M13 17.26V6A4 4 0 005 6V17.26a7 7 0 108 0zM9 4a2 2 0 012 2v7H7V6A2 2 0 019 4zM9 28a5 5 0 01-2.5-9.33l.5-.28V15h4v3.39l.5.28A5 5 0 019 28zM20 4H30V6H20zM20 10H27V12H20zM20 16H30V18H20zM20 22H27V24H20z"></path></svg>`;
export default svgResultCarbonIcon;
