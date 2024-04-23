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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M20,14h8c1.1028,0,2-.8975,2-2V4c0-1.1025-.8972-2-2-2h-8c-1.1028,0-2,.8975-2,2v1H9c-1.1028,0-2,.8975-2,2v3H4c-1.1028,0-2,.8975-2,2v8c0,1.1025,.8972,2,2,2h3v3c0,1.1025,.8972,2,2,2h9v1c0,1.1025,.8972,2,2,2h8c1.1028,0,2-.8975,2-2v-8c0-1.1025-.8972-2-2-2h-8c-1.1028,0-2,.8975-2,2v5H9v-3h3c1.1028,0,2-.8975,2-2V12c0-1.1025-.8972-2-2-2h-3v-3h9v5c0,1.1025,.8972,2,2,2Zm1.4141,14l6.5862-6.5859-.0002,6.5859h-6.5859Zm5.1719-8l-6.5859,6.5859v-6.5859h6.5859ZM10.5522,12l-6.5522,6.5522v-6.5522h6.5522Zm-5.1719,8l6.6199-6.6196,.001,6.6196H5.3804ZM21.4141,12l6.5862-6.5859-.0002,6.5859h-6.5859Zm5.1719-8l-6.5859,6.5859V4h6.5859Z"></path></svg>`;
export default svgResultCarbonIcon;
