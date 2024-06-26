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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M26 12H22v2h4v2H23v2h3v2H22v2h4a2.0027 2.0027 0 002-2V14A2.0023 2.0023 0 0026 12zM19 22H13V18a2.002 2.002 0 012-2h2V14H13V12h4a2.0023 2.0023 0 012 2v2a2.0023 2.0023 0 01-2 2H15v2h4zM8 20L8 12 6 12 6 13 4 13 4 15 6 15 6 20 4 20 4 22 10 22 10 20 8 20z"></path></svg>`;
export default svgResultCarbonIcon;
