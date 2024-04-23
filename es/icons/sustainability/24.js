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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="m21.5708,27.7495c-1.7468.8296-3.6211,1.2505-5.5708,1.2505-7.1682,0-13-5.832-13-13,0-3.0752,1.0571-5.979,3-8.3076v2.3076h2v-6H2v2h2.8416c-2.4753,2.7539-3.8416,6.2622-3.8416,10,0,8.271,6.729,15,15,15,2.249,0,4.4119-.4858,6.4292-1.4438l-.8584-1.8066Z"></path><path d="m21,9c-3.1602,0-5.7515,2.457-5.9778,5.5605-1.0654-.9658-2.4739-1.5605-4.0222-1.5605h-4v4c0,3.3086,2.6917,6,6,6h2v4h2v-8.0005l2,.0005c3.3083,0,6-2.6914,6-6v-4h-4Zm-8,12c-2.2056,0-4-1.7944-4-4v-2h2c2.2056,0,4,1.7944,4,4v.5859l-2.293-2.293-1.4141,1.4141,2.293,2.293h-.5859Zm10-8c0,2.2056-1.7944,4-4,4h-.5859l2.293-2.293-1.4141-1.4141-2.293,2.293v-.5859c0-2.2056,1.7944-4,4-4h2v2Z"></path><path d="m31,16c0-8.271-6.729-15-15-15-2.249,0-4.4119.4858-6.4292,1.4438l.8584,1.8066c1.7468-.8296,3.6211-1.2505,5.5708-1.2505,7.1682,0,13,5.832,13,13,0,3.0752-1.0571,5.979-3,8.3076v-2.3076h-2v6h6v-2h-2.8416c2.4753-2.7539,3.8416-6.2622,3.8416-10Z"></path></svg>`;
export default svgResultCarbonIcon;
