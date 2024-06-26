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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="m29,12h-9V3h9v9Zm-7-2h5v-5h-5v5Z"></path><path d="m20,15v2h7v10h-10V3H5c-1.1028,0-2,.8975-2,2v22c0,1.1025.8972,2,2,2h22c1.1028,0,2-.8975,2-2v-12h-9Zm-13.5859,2h8.5859v8.5859l-8.5859-8.5859Zm8.5859-2H6.4141L15,6.4141v8.5859Zm-1.4141-10L5,13.5859V5h8.5859Zm-8.5859,13.4141l8.5859,8.5859H5v-8.5859Z"></path></svg>`;
export default svgResultCarbonIcon;
