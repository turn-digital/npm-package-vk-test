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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M9.4142 12.5858L16 19.1714 22.5858 12.5858 24 14 16 22 8 14 9.4142 12.5858z"></path><path d="m30,16c0,7.7197-6.2803,14-14,14S2,23.7197,2,16,8.2803,2,16,2s14,6.2803,14,14Zm-26,0c0,6.6167,5.3833,12,12,12s12-5.3833,12-12-5.3833-12-12-12S4,9.3833,4,16Z"></path></svg>`;
export default svgResultCarbonIcon;
