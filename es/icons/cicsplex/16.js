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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M8 18.6V17H6v1.6A7.3833 7.3833 0 0013.4 26H15V24H13.4A5.3775 5.3775 0 018 18.6zM28 18H20a2.0059 2.0059 0 00-2 2v8a2.0059 2.0059 0 002 2h8a2.0059 2.0059 0 002-2V20A2.0059 2.0059 0 0028 18zM20 28V20h8v8zM24 13.4V15h2V13.4A7.3833 7.3833 0 0018.6 6H17V8h1.6A5.3775 5.3775 0 0124 13.4zM12 2H4A2.0059 2.0059 0 002 4v8a2.0059 2.0059 0 002 2h8a2.0059 2.0059 0 002-2V4A2.0059 2.0059 0 0012 2zM4 12V4h8v8z"></path></svg>`;
export default svgResultCarbonIcon;
