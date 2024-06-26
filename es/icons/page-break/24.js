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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M2 18H6V20H2zM26 18H30V20H26zM24 22v6H8V22H6v6a2.0058 2.0058 0 002 2H24a2.0058 2.0058 0 002-2V22zM8 16V4h8v6a2.0058 2.0058 0 002 2h6v4h2V10a.9092.9092 0 00-.3-.7l-7-7A.9087.9087 0 0018 2H8A2.0058 2.0058 0 006 4V16zM18 4.4L23.6 10H18zM10 18H14V20H10zM18 18H22V20H18z"></path></svg>`;
export default svgResultCarbonIcon;
