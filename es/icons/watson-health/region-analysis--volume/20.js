/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { svg } from 'lit';
import spread from '../../../globals/directives/spread';
const svgResultCarbonIcon = ({ children, ...attrs } = {}) =>
  svg`<svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" ...="${spread(
    attrs
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M30,23V21H28V19H26v2H23V19H21v2H19v2h2v3H19v2h2v2h2V28h3v2h2V28h2V26H28V23Zm-4,3H23V23h3Z"></path><path d="M4.8305,20.3555A24.9534,24.9534,0,0,0,15,22.9644v-2A22.9014,22.9014,0,0,1,4.1335,17.6919,11.979,11.979,0,0,1,4,16a11.9847,11.9847,0,0,1,.1332-1.69,22.9282,22.9282,0,0,1,23.7336,0A11.9847,11.9847,0,0,1,28,16h2A14,14,0,1,0,16,30V28A12.01,12.01,0,0,1,4.8305,20.3555ZM16,4a12.01,12.01,0,0,1,11.17,7.6465,24.8982,24.8982,0,0,0-22.3406,0A12.01,12.01,0,0,1,16,4Z"></path></svg>`;
export default svgResultCarbonIcon;
