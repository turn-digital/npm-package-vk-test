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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M23.4141,22,10,8.5859V2H2v8H8.5859L22,23.4141V30h8V22ZM8,8H4V4H8ZM28,28H24V24h4Z"></path><path d="M30 6a3.9915 3.9915 0 00-7.8579-1H13V7h9.1421A3.9945 3.9945 0 0025 9.8579V19h2V9.8579A3.9962 3.9962 0 0030 6zM26 8a2 2 0 112-2A2.0023 2.0023 0 0126 8zM19 25H9.8579A3.9945 3.9945 0 007 22.1421V13H5v9.1421A3.9915 3.9915 0 109.8579 27H19zM6 28a2 2 0 112-2A2.0023 2.0023 0 016 28z"></path></svg>`;
export default svgResultCarbonIcon;
