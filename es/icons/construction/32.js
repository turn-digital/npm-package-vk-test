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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M29.34 16.06a1.0007 1.0007 0 00-1.1084.3L24.46 20.8857l-5.4355-.9882-3.602-8.9512A3.014 3.014 0 0012.6138 9h-4.06A3.0018 3.0018 0 007.01 9.4277L2 12.4336v6.4009l5 .9092V30H9V20.1074l3.5652.648L14 24.2V30h2V23.8l-1.0911-2.6182L22.99 22.6509 18.2319 28.36A1 1 0 0019 30H29a1 1 0 001-1V17A1 1 0 0029.34 16.06zM4 17.1655V13.5664l3-1.8v5.9448zm5 .9092V11h3.6138a1.0141 1.0141 0 01.9453.6709l3.14 7.8037zM28 28H21.1353L28 19.7617zM12.5 8A3.5 3.5 0 1116 4.5 3.5042 3.5042 0 0112.5 8zm0-5A1.5 1.5 0 1014 4.5 1.5017 1.5017 0 0012.5 3z"></path></svg>`;
export default svgResultCarbonIcon;
