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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M16 22H30V24H16zM14 19.4L12.6 18 6 24.6 3.4 22 2 23.4 6 27.4zM16 8H30V10H16zM14 5.4L12.6 4 6 10.6 3.4 8 2 9.4 6 13.4z"></path></svg>`;
export default svgResultCarbonIcon;
