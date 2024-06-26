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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M17,30H15a2.0021,2.0021,0,0,1-2-2V14H8a2.0021,2.0021,0,0,1-2-2V10A2.0021,2.0021,0,0,1,8,8h5V4a2.0021,2.0021,0,0,1,2-2h2a2.0021,2.0021,0,0,1,2,2V8h5a2.0021,2.0021,0,0,1,2,2v2a2.0021,2.0021,0,0,1-2,2H19V28A2.0021,2.0021,0,0,1,17,30ZM8,10v2h7V28h2V12h7V10H17V4H15v6Z"></path></svg>`;
export default svgResultCarbonIcon;
