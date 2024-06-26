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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M16 22a4 4 0 104 4A4.0045 4.0045 0 0016 22zm0 6a2 2 0 112-2A2.002 2.002 0 0116 28zM30 5a3 3 0 10-4 2.8154V15H17V9H15v6H6V7.8159a3.0007 3.0007 0 10-2 0V15a2.002 2.002 0 002 2h9v3h2V17h9a2.002 2.002 0 002-2V7.8159A2.9958 2.9958 0 0030 5zM5 4A1 1 0 114 5 1.0013 1.0013 0 015 4zM27 6a1 1 0 111-1A1.0013 1.0013 0 0127 6z"></path><circle cx="16" cy="5" r="2"></circle></svg>`;
export default svgResultCarbonIcon;
