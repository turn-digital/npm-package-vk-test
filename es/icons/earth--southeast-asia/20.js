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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M14 24H17V26H14zM17 22H19V24H17zM17 18H19V20H17z"></path><path d="M16,2A14,14,0,1,0,30,16,14.0158,14.0158,0,0,0,16,2Zm-.603,2.03,2.5073,5.0156L16.3228,13H10.271l-1.41,4.3872,2.8521,2.8521L10.7056,21.751,6.2856,19H4.395A11.9363,11.9363,0,0,1,15.397,4.03ZM5.1055,21h.6089l3.9345,2.4487A1.9912,1.9912,0,0,0,12.37,22.86l1.0078-1.5118a2.005,2.005,0,0,0-.25-2.5234l-1.9887-1.9888L11.729,15h4.5938A1.9906,1.9906,0,0,0,18.18,13.7427L19.7612,9.79a2.0019,2.0019,0,0,0-.0674-1.6382L17.6843,4.1323A11.9592,11.9592,0,0,1,26.8945,21H23a2.0023,2.0023,0,0,0-2,2v3.8945A11.9477,11.9477,0,0,1,5.1055,21ZM23,25.7266V23h2.7268A12.0762,12.0762,0,0,1,23,25.7266Z"></path></svg>`;
export default svgResultCarbonIcon;
