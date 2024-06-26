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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M8 9a4 4 0 114-4A4 4 0 018 9zM8 3a2 2 0 102 2A2 2 0 008 3zM24 9a4 4 0 114-4A4 4 0 0124 9zm0-6a2 2 0 102 2A2 2 0 0024 3zM26 30H22a2 2 0 01-2-2V21h2v7h4V19h2V13a1 1 0 00-1-1H20.58L16 20l-4.58-8H5a1 1 0 00-1 1v6H6v9h4V21h2v7a2 2 0 01-2 2H6a2 2 0 01-2-2V21a2 2 0 01-2-2V13a3 3 0 013-3h7.58L16 16l3.42-6H27a3 3 0 013 3v6a2 2 0 01-2 2v7A2 2 0 0126 30z"></path></svg>`;
export default svgResultCarbonIcon;
