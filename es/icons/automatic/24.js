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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M26 16H22a2.002 2.002 0 00-2 2V30h2V25h4v5h2V18A2.002 2.002 0 0026 16zm-4 7V18h4v5zM16 27a10.9862 10.9862 0 01-9.2156-5H12V20H4v8H6V24.3149A13.0239 13.0239 0 0016 29zM20 10h5.2155A10.9973 10.9973 0 005 16H3A13.0048 13.0048 0 0126 7.6849V4h2v8H20z"></path></svg>`;
export default svgResultCarbonIcon;
