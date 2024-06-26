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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M4 20L4 22 8.586 22 2 28.586 3.414 30 10 23.414 10 28 12 28 12 20 4 20zM30 4H23V6h3.5859L19 13.5859 14.707 9.293a1 1 0 00-1.414 0L8 14.5858 9.4142 16 14 11.4141l4.293 4.2929a1 1 0 001.414 0L28 7.4141V11h2zM16 28H30V30H16zM2 2H4V16H2z"></path></svg>`;
export default svgResultCarbonIcon;
