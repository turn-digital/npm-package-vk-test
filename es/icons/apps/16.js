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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 16 16">${children}<path d="M4 2v2H2V2h2zm1-1H1v4h4V1zM9 2v2H7V2h2zm1-1H6v4h4V1zM14 2v2h-2V2h2zm1-1h-4v4h4V1zM4 7v2H2V7h2zm1-1H1v4h4V6zM9 7v2H7V7h2zm1-1H6v4h4V6zM14 7v2h-2V7h2zm1-1h-4v4h4V6zM4 12v2H2v-2h2zm1-1H1v4h4v-4zM9 12v2H7v-2h2zm1-1H6v4h4v-4zM14 12v2h-2v-2h2zm1-1h-4v4h4v-4z"></path></svg>`;
export default svgResultCarbonIcon;
