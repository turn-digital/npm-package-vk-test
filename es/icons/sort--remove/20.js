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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M30 19.415L28.586 18 25 21.587 21.414 18 20 19.415 23.586 23 20 26.586 21.414 28 25 24.414 28.586 28 30 26.586 26.414 23 30 19.415zM10 18H16V20H10zM2 6H16V8H2zM6 12H16V14H6z"></path></svg>`;
export default svgResultCarbonIcon;
