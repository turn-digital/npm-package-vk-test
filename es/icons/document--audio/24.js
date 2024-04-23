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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M29,31a.9987.9987,0,0,1-.6245-.2192L23.6494,27H20a1,1,0,0,1-1-1V21a1,1,0,0,1,1-1h3.6494l4.7261-3.7808A1,1,0,0,1,30,17V30a1,1,0,0,1-1,1Zm-8-6h3a1,1,0,0,1,.6245.2192L28,27.9194V19.0806l-3.3755,2.7A1,1,0,0,1,24,22H21Z"></path><path d="M16,28H8V4h8v6a2.0058,2.0058,0,0,0,2,2h6v3l2,0V10a.9092.9092,0,0,0-.3-.7l-7-7A.9087.9087,0,0,0,18,2H8A2.0058,2.0058,0,0,0,6,4V28a2.0058,2.0058,0,0,0,2,2h8ZM18,4.4,23.6,10H18Z"></path></svg>`;
export default svgResultCarbonIcon;
