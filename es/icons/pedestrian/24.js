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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M21.6772,14l-1.2456-3.1143A2.9861,2.9861,0,0,0,17.646,9H13.5542a3.0018,3.0018,0,0,0-1.5439.4277L7,12.4336V18H9V13.5664l3-1.8V23.6973L8.5383,28.8906,10.2024,30,14,24.3027V11h3.646a.9949.9949,0,0,1,.9282.6289L20.3228,16H26V14Z"></path><path d="M17.051 18.316L19 24.162 19 30 21 30 21 23.838 18.949 17.684 17.051 18.316zM16.5 8A3.5 3.5 0 1120 4.5 3.5042 3.5042 0 0116.5 8zm0-5A1.5 1.5 0 1018 4.5 1.5017 1.5017 0 0016.5 3z"></path></svg>`;
export default svgResultCarbonIcon;
