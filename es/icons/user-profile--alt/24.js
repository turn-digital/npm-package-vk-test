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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M19 13H26V15H19zM19 8H30V10H19zM19 3H30V5H19zM11 30H7a2.0059 2.0059 0 01-2-2V21a2.0059 2.0059 0 01-2-2V13a2.9465 2.9465 0 013-3h6a2.9465 2.9465 0 013 3v6a2.0059 2.0059 0 01-2 2v7A2.0059 2.0059 0 0111 30zM6 12a.9448.9448 0 00-1 1v6H7v9h4V19h2V13a.9448.9448 0 00-1-1zM9 9a4 4 0 114-4h0A4.0118 4.0118 0 019 9zM9 3a2 2 0 102 2h0A2.0059 2.0059 0 009 3z"></path></svg>`;
export default svgResultCarbonIcon;
