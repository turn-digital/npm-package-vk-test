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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M27 11H29V15H27zM3 11H5V15H3zM20 20H22V22H20zM10 20H12V22H10z"></path><path d="M21,4H11A5.0059,5.0059,0,0,0,6,9V23a2.0023,2.0023,0,0,0,2,2v3h2V25H22v3h2V25a2.0027,2.0027,0,0,0,2-2V9A5.0059,5.0059,0,0,0,21,4Zm3,6,.0009,6H8V10ZM11,6H21a2.995,2.995,0,0,1,2.8157,2H8.1843A2.995,2.995,0,0,1,11,6ZM8,23V18H24.0012l.0008,5Z"></path></svg>`;
export default svgResultCarbonIcon;
