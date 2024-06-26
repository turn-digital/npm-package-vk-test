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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M11 28h-2c-3.8599 0-7-3.1401-7-7v-2h2v2c0 2.7568 2.2432 5 5 5h2v2zM28.17 26L25.59 28.58 27 30 31 26 27 22 25.58 23.41 28.17 26zM22 31L20.085 30.4229 23 21 24.9149 21.5771 22 31zM16.83 26L19.41 23.42 18 22 14 26 18 30 19.42 28.59 16.83 26zM30 19h-2v-7c0-2.7614-2.2386-5-5-5h-4v-2h4c3.866 0 7 3.134 7 7v7z"></path><circle cx="3" cy="4" r="1"></circle><path d="M6 3H16V5H6z"></path><circle cx="3" cy="12" r="1"></circle><path d="M6 11H16V13H6zM2 15H12V17H2z"></path><circle cx="15" cy="8" r="1"></circle><path d="M2 7H12V9H2z"></path><circle cx="15" cy="16" r="1"></circle></svg>`;
export default svgResultCarbonIcon;
