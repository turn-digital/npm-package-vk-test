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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M20.8851,19.4711a5.9609,5.9609,0,0,0,0-6.9422L23,10.4141l1.293,1.2929a.9995.9995,0,0,0,1.414,0l4-4a.9994.9994,0,0,0,0-1.414l-4-4a.9994.9994,0,0,0-1.414,0l-4,4a.9994.9994,0,0,0,0,1.414L21.5859,9l-2.1148,2.1149a5.9609,5.9609,0,0,0-6.9422,0L10,8.5859V2H2v8H8.5859l2.529,2.5289a5.9609,5.9609,0,0,0,0,6.9422L9,21.5859,7.707,20.293a.9994.9994,0,0,0-1.414,0l-4,4a.9994.9994,0,0,0,0,1.414l4,4a.9995.9995,0,0,0,1.414,0l4-4a.9994.9994,0,0,0,0-1.414L10.4141,23l2.1148-2.1149a5.9609,5.9609,0,0,0,6.9422,0L22,23.4141V30h8V22H23.4141ZM25,4.4141,27.5859,7,25,9.5859,22.4141,7ZM7,27.5859,4.4141,25,7,22.4141,9.5859,25ZM8,8H4V4H8Zm4,8a4,4,0,1,1,4,4A4.0045,4.0045,0,0,1,12,16Zm12,8h4v4H24Z"></path></svg>`;
export default svgResultCarbonIcon;
