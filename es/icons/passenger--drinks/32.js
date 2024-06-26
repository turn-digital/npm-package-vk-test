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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M30 4V2H22V4a3.9906 3.9906 0 003 3.8586V11H23v2h6V11H27V7.8586A3.9906 3.9906 0 0030 4zM10.5 9A3.5 3.5 0 1114 5.5 3.5042 3.5042 0 0110.5 9zm0-5A1.5 1.5 0 1012 5.5 1.5017 1.5017 0 0010.5 4zM22.4746 31.313L19.3408 24H12.2393A4.0073 4.0073 0 018.373 21.0293l-1.6337-6.126a3.8987 3.8987 0 017.5341-2.0092L15.1016 16H21v2H13.5645l-1.2227-4.5908a1.9 1.9 0 00-3.6709.979l1.6338 6.1255A2.0052 2.0052 0 0012.2393 22h8.42l3.6543 8.5254z"></path><path d="M18,28H7.7683a2.0025,2.0025,0,0,1-1.9326-1.4849L2.0337,12.2576l1.9326-.5152L7.7683,26H18Z"></path></svg>`;
export default svgResultCarbonIcon;
