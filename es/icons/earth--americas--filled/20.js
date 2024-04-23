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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M16,2A14,14,0,1,0,30,16,14.0158,14.0158,0,0,0,16,2ZM4,16a11.915,11.915,0,0,1,.7-4H10l5,4-2.8,3.6929A1,1,0,0,0,12.293,21L15,24v3.9492A12.01,12.01,0,0,1,4,16ZM21.4348,26.6846l2.5457-7.6992A1,1,0,0,0,23.614,18L15,11l2-2h5.2793a1,1,0,0,0,.9487-.6836L23.7234,6.83a11.9742,11.9742,0,0,1-2.2886,19.855Z"></path></svg>`;
export default svgResultCarbonIcon;
