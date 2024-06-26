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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M4.21,17.0615,16,29,27.79,17.0615a7.7313,7.7313,0,0,0,0-10.8232,7.494,7.494,0,0,0-10.6841,0L16,7.3643l-1.1062-1.126a7.494,7.494,0,0,0-10.6841,0A7.7313,7.7313,0,0,0,4.21,17.0615ZM26.3552,15.645,16,26.1255V10.23q1.2708-1.2876,2.5413-2.5742a5.4768,5.4768,0,0,1,7.8139,0A5.708,5.708,0,0,1,26.3552,15.645Z"></path></svg>`;
export default svgResultCarbonIcon;
