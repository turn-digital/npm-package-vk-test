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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M31 11L31 21 29 21 27 15 27 21 25 21 25 11 27 11 29 17 29 11 31 11zM21.3335 21h-2.667A1.6684 1.6684 0 0117 19.3335v-6.667A1.6684 1.6684 0 0118.6665 11h2.667A1.6684 1.6684 0 0123 12.6665v6.667A1.6684 1.6684 0 0121.3335 21zM19 19h2V13H19zM13.3335 21H9V19h4V17H11a2.002 2.002 0 01-2-2V12.6665A1.6684 1.6684 0 0110.6665 11H15v2H11v2h2a2.002 2.002 0 012 2v2.3335A1.6684 1.6684 0 0113.3335 21zM5.3335 21H2.6665A1.6684 1.6684 0 011 19.3335V17H3v2H5V11H7v8.3335A1.6684 1.6684 0 015.3335 21z"></path></svg>`;
export default svgResultCarbonIcon;
