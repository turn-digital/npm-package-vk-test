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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M30,14H28A10.0113,10.0113,0,0,0,18,4V2A12.0137,12.0137,0,0,1,30,14Z"></path><path d="M26 14H24a6.0067 6.0067 0 00-6-6V6A8.0092 8.0092 0 0126 14zM16 28V24.96a9.9124 9.9124 0 007.3179-2.208 1.8482 1.8482 0 00.6777-1.3344 1.8 1.8 0 00-.5239-1.36L18.4141 15 21 12.4141 19.5859 11 17 13.5859 11.9419 8.5273a1.8145 1.8145 0 00-1.36-.5229 1.845 1.845 0 00-1.3339.6782 9.9566 9.9566 0 00-.5127 11.95L6.2793 28H2v2H30V28zM10.68 10.0938L21.9058 21.32A8.0011 8.0011 0 0110.68 10.0938zM14 28H8.3875l1.8757-5.627A9.9894 9.9894 0 0014 24.5435z"></path></svg>`;
export default svgResultCarbonIcon;
