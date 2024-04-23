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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M5 24c-1.6567 0-3 1.3433-3 3s1.3433 3 3 3 3-1.3433 3-3-1.3433-3-3-3zm0 4c-.5522 0-1-.4478-1-1s.4478-1 1-1 1 .4478 1 1-.4478 1-1 1zM16 24c-1.6567 0-3 1.3433-3 3s1.3433 3 3 3 3-1.3433 3-3-1.3433-3-3-3zm0 4c-.5522 0-1-.4478-1-1s.4478-1 1-1 1 .4478 1 1-.4478 1-1 1zM27 24c-1.6567 0-3 1.3433-3 3s1.3433 3 3 3 3-1.3433 3-3-1.3433-3-3-3zm0 4c-.5522 0-1-.4478-1-1s.4478-1 1-1 1 .4478 1 1-.4478 1-1 1zM29.586 17.5859l-1.5859 1.5859v-3.1719c0-3.5542-2.6646-6.4917-6.0999-6.9355.0623-.3457.0999-.7007.0999-1.0645 0-3.3135-2.6863-6-6-6s-6 2.6865-6 6c0 .3638.0376.7188.0999 1.0645-3.4353.4438-6.0999 3.3813-6.0999 6.9355v3.1714l-1.5859-1.5854-1.4141 1.4141 4 4 4-4-1.4141-1.4141-1.5859 1.5859v-3.1719c0-2.6953 2.1479-4.8848 4.8203-4.9819.8799 1.5063 2.3945 2.5918 4.1797 2.8921v5.2617l-1.5859-1.5859-1.4141 1.4141 4 4 4-4-1.4141-1.4141-1.5859 1.5859v-5.2617c1.7852-.3003 3.2998-1.3857 4.1797-2.8921 2.6724.0972 4.8203 2.2866 4.8203 4.9819v3.1714l-1.5859-1.5854-1.4141 1.4141 4 4 4-4-1.4141-1.4141zm-13.5859-5.5859c-2.2056 0-4-1.7944-4-4s1.7944-4 4-4 4 1.7944 4 4-1.7944 4-4 4z"></path></svg>`;
export default svgResultCarbonIcon;
