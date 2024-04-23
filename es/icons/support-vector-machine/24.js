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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<circle cx="26" cy="18" r="4"></circle><circle cx="18" cy="26" r="4"></circle><path d="M-2.799 15H34.799V17H-2.799z" transform="rotate(-45 16 16)"></path><path d="M14 10c-2.2056 0-4-1.7944-4-4s1.7944-4 4-4 4 1.7944 4 4-1.7944 4-4 4zm0-6c-1.1028 0-2 .8972-2 2s.8972 2 2 2 2-.8972 2-2-.8972-2-2-2zM6 18c-2.2056 0-4-1.7944-4-4s1.7944-4 4-4 4 1.7944 4 4-1.7944 4-4 4zm0-6c-1.1028 0-2 .8972-2 2s.8972 2 2 2 2-.8972 2-2-.8972-2-2-2z"></path></svg>`;
export default svgResultCarbonIcon;
