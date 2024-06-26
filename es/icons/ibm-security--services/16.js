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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M26,20a2.97,2.97,0,0,0-1.8551.6607L22,19.4224V17.8157a3,3,0,1,0-2,0v1.6067l-2.1449,1.2383A2.97,2.97,0,0,0,16,20a3.02,3.02,0,1,0,2.9254,2.3525L21,21.1548l2.0746,1.1977A2.9978,2.9978,0,1,0,26,20ZM16,24a1,1,0,1,1,1-1A1.0006,1.0006,0,0,1,16,24Zm5-10a1,1,0,1,1-1,1A1.0009,1.0009,0,0,1,21,14Zm5,10a1,1,0,1,1,1-1A1.0006,1.0006,0,0,1,26,24Z"></path><path d="M16,31A11.0125,11.0125,0,0,1,5,20V6.3823L15.9873.8816,26.4478,6.1187l-.8956,1.7885L15.9873,3.1184,7,7.6177V20a9.0008,9.0008,0,0,0,14.3994,7.2012L22.6006,28.8A10.9077,10.9077,0,0,1,16,31Z"></path></svg>`;
export default svgResultCarbonIcon;
