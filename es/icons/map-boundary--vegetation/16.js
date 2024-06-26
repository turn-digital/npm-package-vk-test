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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M28 16H18V14h5V10a2 2 0 012-2h1.5a1.5 1.5 0 00.2837-2.9734l-.7109-.1355L25.9982 4.32a2.6322 2.6322 0 00-1.68-2.1823 2.5051 2.5051 0 00-3.0836 1.3042l-.3032.6472-.71-.0771a2.0185 2.0185 0 00-2.17 2.4343A2.0976 2.0976 0 0020.1261 8H21v2h-.7817A4.1491 4.1491 0 0116.012 6.3136a4.0047 4.0047 0 013.7414-4.306A4.5006 4.5006 0 0127.8267 3.26a3.5051 3.5051 0 012.1422 3.7094A3.6283 3.6283 0 0126.3172 10H25v4h3zM18 18H22V20H18zM14 18L14 16 12 16 12 20 16 20 16 18 14 18zM12 10H14V14H12z"></path><path d="M17.885 30L11.819 26.142 4 27.989 4 4 14 4 14 8 12 8 12 6 6 6 6 25.461 12.181 24.001 18.115 27.776 22.818 26 26 26 26 20 24 20 24 18 28 18 28 28 23.182 28 17.885 30z"></path></svg>`;
export default svgResultCarbonIcon;
