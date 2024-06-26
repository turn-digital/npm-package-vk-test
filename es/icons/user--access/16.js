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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M16 30H14V25a3.0033 3.0033 0 00-3-3H7a3.0033 3.0033 0 00-3 3v5H2V25a5.0059 5.0059 0 015-5h4a5.0059 5.0059 0 015 5zM9 10a3 3 0 11-3 3 3 3 0 013-3M9 8a5 5 0 105 5A5 5 0 009 8zM30 12a1.9922 1.9922 0 00-.5117.0742L28.4331 11.019a3.8788 3.8788 0 000-4.038l1.0552-1.0552a2.0339 2.0339 0 10-1.4141-1.4141L27.019 5.5669a3.8788 3.8788 0 00-4.038 0L21.9258 4.5117a2.0339 2.0339 0 10-1.4141 1.4141L21.5669 6.981a3.8788 3.8788 0 000 4.038l-1.0552 1.0552a2.0339 2.0339 0 101.4141 1.4141l1.0552-1.0552a3.8788 3.8788 0 004.038 0l1.0552 1.0552A1.9957 1.9957 0 1030 12zM23 9a2 2 0 112 2A2.0025 2.0025 0 0123 9z"></path></svg>`;
export default svgResultCarbonIcon;
