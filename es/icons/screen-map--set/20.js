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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M24 26H31V28H24zM24 22H31V24H24zM20.4141 12L25 12 25 10 17 10 17 18 19 18 19 13.4141 25.5859 20 27 18.5859 20.4141 12z"></path><path d="M7,7H29v12h2V7c0-1.1025-.8972-2-2-2H7c-1.1028,0-2,.8975-2,2v15c0,1.1025,.8972,2,2,2h7v4h-4v2h12v-8H7V7Zm13,21h-4v-4h4v4Z"></path><path d="M26,3V1H3C1.8972,1,1,1.8965,1,3v15H3V3H26Z"></path></svg>`;
export default svgResultCarbonIcon;
