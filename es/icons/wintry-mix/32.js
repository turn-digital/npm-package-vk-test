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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M15 26H17V28H15zM17 28H19V30H17zM19 30H21V32H19zM19 26H21V28H19zM15 30H17V32H15zM13 16H15V18H13zM15 18H17V20H15zM17 20H19V22H17zM17 16H19V18H17zM13 20H15V22H13zM10 30a1 1 0 01-.8944-1.4474l2-4.0005a1 1 0 111.7888.8947l-2 4A.9981.9981 0 0110 30z"></path><path d="M24.8008,9.1362a8.9943,8.9943,0,0,0-17.6006,0A6.5321,6.5321,0,0,0,2,15.5V22l1,2,1-2V20.18a6.4891,6.4891,0,0,0,3.4294,1.7246L6.106,24.5527a1,1,0,1,0,1.7885.8946l2-4a1,1,0,0,0-.447-1.3418.977.977,0,0,0-.489-.0894V20H8.5a4.4975,4.4975,0,0,1-.356-8.981l.8155-.0639.0991-.812a6.9938,6.9938,0,0,1,13.8838,0l.0986.812.8154.0639A4.4975,4.4975,0,0,1,23.5,20h-.542v.0083A.9955.9955,0,0,0,22,21v3l1,2,1-2V21.9746a6.4473,6.4473,0,0,0,2-.4761V26l1,2,1-2V20.18A6.4876,6.4876,0,0,0,24.8008,9.1362Z"></path></svg>`;
export default svgResultCarbonIcon;
