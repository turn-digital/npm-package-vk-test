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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M28 8V21h2V8a3.9986 3.9986 0 00-4-4H8.2429l2 2H26A1.9965 1.9965 0 0128 8zM30 28.5859L3.4141 2 2 3.4141 3.5039 4.918A3.9181 3.9181 0 002 8V20a3.9992 3.9992 0 004 4h6V22H6a1.9965 1.9965 0 01-2-2V8a1.9814 1.9814 0 01.9194-1.6665L20.5859 22H17l-4 7 1.7358 1 3.4288-6h4.4213l6 6z"></path></svg>`;
export default svgResultCarbonIcon;
