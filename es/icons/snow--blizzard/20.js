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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M13 10H15V12H13zM15 12H17V14H15zM17 14H19V16H17zM17 10H19V12H17zM13 14H15V16H13zM3 26H5V28H3zM5 28H7V30H5zM7 30H9V32H7zM7 26H9V28H7zM3 30H5V32H3zM23 26H25V28H23zM25 28H27V30H25zM27 30H29V32H27zM27 26H29V28H27zM23 30H25V32H23zM8 18H10V20H8zM10 20H12V22H10zM12 22H14V24H12zM12 18H14V20H12zM8 22H10V24H8zM18 18H20V20H18zM20 20H22V22H20zM22 22H24V24H22zM22 18H24V20H22zM18 22H20V24H18zM13 26H15V28H13zM15 28H17V30H15zM17 30H19V32H17zM17 26H19V28H17zM13 30H15V32H13z"></path><path d="M24.8008,9.1362a8.9943,8.9943,0,0,0-17.6006,0A6.4957,6.4957,0,0,0,6,21.4985v-2.26A4.4943,4.4943,0,0,1,8.144,11.019l.8155-.0639.0991-.812a6.9938,6.9938,0,0,1,13.8838,0l.0986.812.8154.0639A4.4944,4.4944,0,0,1,26,19.2383v2.26A6.4958,6.4958,0,0,0,24.8008,9.1362Z"></path></svg>`;
export default svgResultCarbonIcon;
