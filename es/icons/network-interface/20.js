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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M28 18h-2V6h-13v-2h13c1.1028 0 2 .8972 2 2v12zM18 28H6c-1.1028 0-2-.8972-2-2v-13h2v13h12v2zM26 21l-1.793 1.793-5.5076-5.5078c.187-.3911.3005-.8232.3005-1.2852 0-1.6543-1.3457-3-3-3-.4617 0-.894.1133-1.2852.3008l-5.2817-5.2817c.3513-.5947.5669-1.2793.5669-2.019 0-2.2056-1.7944-4-4-4S2 3.7944 2 6s1.7944 4 4 4c.7395 0 1.4241-.2153 2.019-.5669l5.2815 5.2817c-.187.3911-.3005.8232-.3005 1.2852 0 1.6543 1.3457 3 3 3 .4617 0 .894-.1133 1.2852-.3008l5.5078 5.5078-1.793 1.793 5 5 5-5-5-5zM4 6c0-1.1025.8972-2 2-2s2 .8975 2 2-.8972 2-2 2-2-.8975-2-2zm11 10c0-.5513.4485-1 1-1s1 .4487 1 1-.4485 1-1 1-1-.4487-1-1zm8.8286 10l2.1714-2.1714 2.1714 2.1714-2.1714 2.1714-2.1714-2.1714z"></path></svg>`;
export default svgResultCarbonIcon;
