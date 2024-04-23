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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M10.343 10.343H21.657V21.657H10.343z" transform="rotate(-45 16 16)"></path><path d="M29.3906,14.5269,17.4731,2.6094a2.0852,2.0852,0,0,0-2.9462,0L2.6094,14.5269a2.0852,2.0852,0,0,0,0,2.9462L14.5269,29.3906a2.0852,2.0852,0,0,0,2.9462,0L29.3906,17.4731a2.0852,2.0852,0,0,0,0-2.9462ZM16,28.0356,3.9646,16,16,3.9644,28.0356,16Z"></path></svg>`;
export default svgResultCarbonIcon;
