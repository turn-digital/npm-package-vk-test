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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M25 30a6 6 0 116-6A6.0069 6.0069 0 0125 30zm0-10a4 4 0 104 4A4.0045 4.0045 0 0025 20zM7 30a6 6 0 116-6A6.0069 6.0069 0 017 30zM7 20a4 4 0 104 4A4.0045 4.0045 0 007 20z"></path><path d="M17 27H15V20.4139L9.5849 15a2.003 2.003 0 010-2.8292l4.5859-4.5859a2.0024 2.0024 0 012.8286 0L21.414 12H27v1.9993L20.5853 14l-5-5L11 13.5849l6 6zM21.5 8A3.5 3.5 0 1125 4.5 3.5042 3.5042 0 0121.5 8zm0-5A1.5 1.5 0 1023 4.5 1.5017 1.5017 0 0021.5 3z"></path></svg>`;
export default svgResultCarbonIcon;
