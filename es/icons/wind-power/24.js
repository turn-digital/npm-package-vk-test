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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M17,28V15.8159a3.0059,3.0059,0,0,0,1.47-1.1186L27.063,17l.5176-1.9321-8.6045-2.3052a2.985,2.985,0,0,0-2.63-2.7275L14.1938,2l-1.9316.5186,2.1318,7.956a2.9588,2.9588,0,0,0-1.093,3.8115L7,20.5859,8.415,22l6.3-6.3A2.8938,2.8938,0,0,0,15,15.8154V28H2v2H30V28Zm0-15a1,1,0,1,1-1-1A1.0008,1.0008,0,0,1,17,13Z"></path></svg>`;
export default svgResultCarbonIcon;
