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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<circle cx="19" cy="19" r="4"></circle><path d="M28 30H10a2.0023 2.0023 0 01-2-2V10a2.0023 2.0023 0 012-2H28a2.0023 2.0023 0 012 2V28A2.0023 2.0023 0 0128 30zM10 10V28H28V10zM11 2L2 2 2 11 4 11 4 4 11 4 11 2z"></path></svg>`;
export default svgResultCarbonIcon;
