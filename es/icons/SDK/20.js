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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M30 9L27.9 9 24 15.6 24 9 22 9 22 23 24 23 24 18.7 24.9 17.2 27.9 23 30 23 26.1 15.4 30 9zM16 23H12V9h4a4.0118 4.0118 0 014 4v6A4.0118 4.0118 0 0116 23zm-2-2h2a2.0059 2.0059 0 002-2V13a2.0059 2.0059 0 00-2-2H14zM8 23H2V21H8V17H4a2.0059 2.0059 0 01-2-2V11A2.0059 2.0059 0 014 9h6v2H4v4H8a2.0059 2.0059 0 012 2v4A2.0059 2.0059 0 018 23z"></path></svg>`;
export default svgResultCarbonIcon;
