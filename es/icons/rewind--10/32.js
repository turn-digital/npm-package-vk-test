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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M4,18A12,12,0,1,0,16,6H12V1L6,7l6,6V8h4A10,10,0,1,1,6,18Z"></path><path d="M19.63 22.13a2.84 2.84 0 01-1.28-.27 2.44 2.44 0 01-.89-.77 3.57 3.57 0 01-.52-1.25 7.69 7.69 0 01-.17-1.68 7.83 7.83 0 01.17-1.68 3.65 3.65 0 01.52-1.25 2.44 2.44 0 01.89-.77 2.84 2.84 0 011.28-.27 2.44 2.44 0 012.16 1 5.23 5.23 0 01.7 2.93 5.23 5.23 0 01-.7 2.93A2.44 2.44 0 0119.63 22.13zm0-1.22a1.07 1.07 0 001-.55A3.38 3.38 0 0021 18.85V17.47a3.31 3.31 0 00-.29-1.5 1.23 1.23 0 00-2.06 0 3.31 3.31 0 00-.29 1.5v1.38a3.38 3.38 0 00.29 1.51A1.06 1.06 0 0019.63 20.91zM10.63 22V20.82h2V15.63l-1.86 1-.55-1.06 2.32-1.3H14v6.5h1.78V22z"></path></svg>`;
export default svgResultCarbonIcon;
