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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M14 25H28V27H14zM7.17 26L4.59 28.58 6 30 10 26 6 22 4.58 23.41 7.17 26zM14 15H28V17H14zM7.17 16L4.59 18.58 6 20 10 16 6 12 4.58 13.41 7.17 16zM14 5H28V7H14zM7.17 6L4.59 8.58 6 10 10 6 6 2 4.58 3.41 7.17 6z"></path></svg>`;
export default svgResultCarbonIcon;
