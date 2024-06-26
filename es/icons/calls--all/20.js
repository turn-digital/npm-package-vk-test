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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M26 12c-2.2091 0-4 1.7908-4 4s1.7909 4 4 4 4-1.7909 4-4-1.7908-4-4-4zm0 6c-1.1028 0-2-.8972-2-2s.8972-2 2-2 2 .8972 2 2-.8972 2-2 2zM15 21v2h2.5859l-2.3008 2.3008c-.3911-.1875-.8235-.3008-1.2852-.3008-1.6543 0-3 1.3457-3 3s1.3457 3 3 3 3-1.3457 3-3c0-.4619-.1135-.894-.3005-1.2852l2.3005-2.3008v2.5859h2v-6h-6zm-1 8c-.5515 0-1-.4487-1-1s.4485-1 1-1 1 .4487 1 1-.4485 1-1 1zM11.4143 11.4141l-1.4143 1.4146 2.1716 2.1714h-4.356c-.4141-1.1611-1.5137-2-2.8157-2-1.6543 0-3 1.3457-3 3s1.3457 3 3 3c1.302 0 2.4016-.8389 2.8157-2h4.356l-2.1716 2.1714 1.4143 1.4146 4.5857-4.5859-4.5857-4.5859zm-6.4143 5.5859c-.5515 0-1-.4487-1-1s.4485-1 1-1 1 .4487 1 1-.4485 1-1 1zM19 5v2.5859l-2.3005-2.3008c.187-.3911.3005-.8232.3005-1.2852 0-1.6543-1.3457-3-3-3s-3 1.3457-3 3 1.3457 3 3 3c.4617 0 .894-.1133 1.2852-.3008l2.3008 2.3008h-2.5859v2h6v-6h-2zm-6-1c0-.5513.4485-1 1-1s1 .4487 1 1-.4485 1-1 1-1-.4487-1-1z"></path></svg>`;
export default svgResultCarbonIcon;
