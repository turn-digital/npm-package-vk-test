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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M10 24c0 3.3137 2.6863 6 6 6s6-2.6863 6-6-2.6863-6-6-6-6 2.6863-6 6zm2 0c0-2.2056 1.7944-4 4-4s4 1.7944 4 4-1.7944 4-4 4-4-1.7944-4-4zM30 5c0-1.6567-1.3433-3-3-3s-3 1.3433-3 3c0 1.3042.8374 2.4028 2 2.8164v5.1836c0 1.7217-.752 3.3438-2 4.4673v-2.4673h-2v6h6v-2h-2.7168c1.6938-1.4995 2.7168-3.6816 2.7168-6v-5.1836c1.1626-.4136 2-1.5122 2-2.8164zm-3 1c-.5522 0-1-.4478-1-1s.4478-1 1-1 1 .4478 1 1-.4478 1-1 1zM18.586 11.5859l-1.5859 1.5859v-5.3555c1.1626-.4136 2-1.5122 2-2.8164 0-1.6567-1.3433-3-3-3s-3 1.3433-3 3c0 1.3042.8374 2.4028 2 2.8164v5.3555l-1.5859-1.5859-1.4141 1.4141 4 4 4-4-1.4141-1.4141zm-2.5859-7.5859c.5522 0 1 .4478 1 1s-.4478 1-1 1-1-.4478-1-1 .4478-1 1-1zM8 15v2.4673c-1.248-1.1235-2-2.7456-2-4.4673v-5.1836c1.1626-.4136 2-1.5122 2-2.8164 0-1.6567-1.3433-3-3-3s-3 1.3433-3 3c0 1.3042.8374 2.4028 2 2.8164v5.1836c0 2.3184 1.0229 4.5005 2.7168 6h-2.7168v2h6v-6h-2zm-3-11c.5522 0 1 .4478 1 1s-.4478 1-1 1-1-.4478-1-1 .4478-1 1-1z"></path></svg>`;
export default svgResultCarbonIcon;
