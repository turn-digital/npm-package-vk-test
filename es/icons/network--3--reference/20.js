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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M4 20L4 22 8.586 22 2 28.586 3.414 30 10 23.414 10 28 12 28 12 20 4 20zM30 30H22V22h8zm-6-2h4V24H24zM20 20H12V12h8zm-6-2h4V14H14z"></path><path d="M24 17H22V15h2a4 4 0 000-8H12V5H24a6 6 0 010 12zM10 10H2V2h8zM4 8H8V4H4z"></path></svg>`;
export default svgResultCarbonIcon;
