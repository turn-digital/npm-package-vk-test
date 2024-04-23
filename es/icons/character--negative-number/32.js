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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M19.5 22.5L19.5 21.5 22.5 21.5 22.5 10.5 19.5 10.5 19.5 9.5 23.5 9.5 23.5 21.5 26.5 21.5 26.5 22.5 19.5 22.5z"></path><path d="M23 10V22h0V10m1-1H19v2h3V21H19v2h8V21H24V9zM5 15H15V17H5z"></path></svg>`;
export default svgResultCarbonIcon;
