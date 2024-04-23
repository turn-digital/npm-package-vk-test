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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M16,30A14.0158,14.0158,0,0,1,2,16H4A12.0025,12.0025,0,0,0,22.4609,26.1143l1.0782,1.684A13.9511,13.9511,0,0,1,16,30Z"></path><path d="M26,17l-1.4141,1.4141L26.1719,20H15.8157a2.9874,2.9874,0,0,0-.2742-.5762l4.481-5.601A2.9676,2.9676,0,0,0,21,14a3,3,0,1,0-2.8157-4H13.8157a2.982,2.982,0,0,0-5.6314,0H2v2H8.1843a2.982,2.982,0,0,0,5.6314,0h4.3686a2.9874,2.9874,0,0,0,.2742.5762l-4.481,5.601A2.9676,2.9676,0,0,0,13,18a3,3,0,1,0,2.8157,4H26.1719l-1.586,1.5859L26,25l4-4Zm-5-7a1,1,0,1,1-1,1A1.0009,1.0009,0,0,1,21,10ZM11,12a1,1,0,1,1,1-1A1.0009,1.0009,0,0,1,11,12Zm2,10a1,1,0,1,1,1-1A1.0009,1.0009,0,0,1,13,22Z"></path><path d="M30,16H28A12.0025,12.0025,0,0,0,9.5391,5.8857L8.4609,4.2017A14.0019,14.0019,0,0,1,30,16Z"></path></svg>`;
export default svgResultCarbonIcon;