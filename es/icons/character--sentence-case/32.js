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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M29 23H24a2.0027 2.0027 0 01-2-2V15a2.0023 2.0023 0 012-2h5v2H24v6h5zM18 13H14V9H12V23h6a2.0027 2.0027 0 002-2V15A2.0023 2.0023 0 0018 13zm-4 8V15h4v6zM8 9H4a2.002 2.002 0 00-2 2V23H4V18H8v5h2V11A2.002 2.002 0 008 9zM4 16V11H8v5z"></path></svg>`;
export default svgResultCarbonIcon;
