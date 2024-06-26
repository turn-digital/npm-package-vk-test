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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M15 24c-3.8594 0-7-3.1401-7-7s3.1406-7 7-7 7 3.1401 7 7-3.1406 7-7 7zm0-12c-2.7568 0-5 2.2432-5 5s2.2432 5 5 5 5-2.2432 5-5-2.2432-5-5-5zM30 13h-2V4h-9v-2h9c1.1025 0 2 .897 2 2v9z"></path><path d="m15,30c-7.168,0-13-5.8315-13-13S7.832,4,15,4v2c-6.0654,0-11,4.9346-11,11s4.9346,11,11,11,11-4.9346,11-11v-1h2v1c0,7.1685-5.832,13-13,13Z"></path></svg>`;
export default svgResultCarbonIcon;
