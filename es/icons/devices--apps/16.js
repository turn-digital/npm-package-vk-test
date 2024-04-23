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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M26 2H30V6H26zM26 8H30V12H26zM20 2H24V6H20zM20 8H24V12H20zM28 20h-14v2h2v4h-2v2h9v-2h-5v-4h10c.5304 0 1.0392-.2108 1.4142-.5858s.5858-.8838.5858-1.4142v-6h-2v6zM6 6h12v-2H6c-.5304 0-1.0392.2107-1.4142.5858-.3751.375-.5858.8838-.5858 1.4142v6h2v-6zM10 14H4c-.5304 0-1.0392.2107-1.4142.5858-.3751.375-.5858.8838-.5858 1.4142v12c0 .5304.2107 1.0392.5858 1.4142.375.375.8838.5858 1.4142.5858h6c.5304 0 1.0392-.2108 1.4142-.5858.3751-.375.5858-.8838.5858-1.4142v-12c0-.5304-.2107-1.0392-.5858-1.4142-.375-.3751-.8838-.5858-1.4142-.5858zm0 14H4v-12h6v12z"></path></svg>`;
export default svgResultCarbonIcon;
