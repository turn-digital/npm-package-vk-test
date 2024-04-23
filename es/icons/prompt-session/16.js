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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M27 25.5859L25 23.5859 25 21 23 21 23 24.4141 25.5859 27 27 25.5859z"></path><path d="M24 31c-3.8599 0-7-3.1401-7-7s3.1401-7 7-7 7 3.1401 7 7-3.1401 7-7 7zm0-12c-2.7571 0-5 2.2429-5 5s2.2429 5 5 5 5-2.2429 5-5-2.2429-5-5-5zM28 15h2V5c0-1.103-.8975-2-2-2h-3v2h3v10z"></path><circle cx="9" cy="13" r="2"></circle><circle cx="16" cy="13" r="2"></circle><circle cx="23" cy="13" r="2"></circle><path d="m7,23h-3c-1.103,0-2-.8975-2-2V5c0-1.103.897-2,2-2h3v2h-3v16h3v2Z"></path></svg>`;
export default svgResultCarbonIcon;
