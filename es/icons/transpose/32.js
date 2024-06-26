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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M19 26H14V24h5a5.0055 5.0055 0 005-5V14h2v5A7.0078 7.0078 0 0119 26zM8 30H4a2.0023 2.0023 0 01-2-2V14a2.0023 2.0023 0 012-2H8a2.0023 2.0023 0 012 2V28A2.0023 2.0023 0 018 30zM4 14V28H8V14zM28 10H14a2.0023 2.0023 0 01-2-2V4a2.0023 2.0023 0 012-2H28a2.0023 2.0023 0 012 2V8A2.0023 2.0023 0 0128 10zM14 4V8H28V4z"></path></svg>`;
export default svgResultCarbonIcon;
