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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M4 12H2V4A2.0021 2.0021 0 014 2h8V4H4zM12 30H4a2.0021 2.0021 0 01-2-2V20H4v8h8zM28 30H20V28h8V20h2v8A2.0021 2.0021 0 0128 30zM30 12H28V4H20V2h8a2.0021 2.0021 0 012 2zM16 22a6 6 0 116-6A6.0067 6.0067 0 0116 22zm0-10a4 4 0 104 4A4.0045 4.0045 0 0016 12z"></path><circle cx="16" cy="16" r="2"></circle><circle cx="16" cy="7" r="1"></circle><circle cx="16" cy="3" r="1"></circle><circle cx="16" cy="25" r="1"></circle><circle cx="16" cy="29" r="1"></circle><circle cx="25" cy="16" r="1"></circle><circle cx="29" cy="16" r="1"></circle><circle cx="7" cy="16" r="1"></circle><circle cx="3" cy="16" r="1"></circle><circle cx="9.636" cy="9.636" r="1"></circle><circle cx="7" cy="7" r="1"></circle><circle cx="22.364" cy="22.364" r="1"></circle><circle cx="25" cy="25" r="1"></circle><circle cx="22.364" cy="9.636" r="1"></circle><circle cx="25" cy="7" r="1"></circle><circle cx="9.636" cy="22.364" r="1"></circle><circle cx="7" cy="25" r="1"></circle></svg>`;
export default svgResultCarbonIcon;
