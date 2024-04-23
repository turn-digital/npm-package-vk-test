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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M6 24H8V26H6zM8 26H10V28H8zM10 28H12V30H10zM10 24H12V26H10zM6 28H8V30H6z"></path><path d="M21 30a1 1 0 01-.8944-1.4474l2-4.0005a1 1 0 111.7888.8947l-2 4A.9981.9981 0 0121 30zM24.8008 9.1362a8.9943 8.9943 0 00-17.6006 0A6.4973 6.4973 0 008.5 22h8.8818L16.106 24.5527a1 1 0 101.7885.8946L19.6177 22H23.5A6.4974 6.4974 0 0024.8008 9.1362zM23.5 20H8.5a4.4975 4.4975 0 01-.356-8.981l.8155-.0639.0991-.812a6.9938 6.9938 0 0113.8838 0l.0986.812.8154.0639A4.4975 4.4975 0 0123.5 20z"></path></svg>`;
export default svgResultCarbonIcon;
