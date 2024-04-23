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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M27 3h-8c-1.1028 0-2 .8975-2 2V27c0 1.1025.8972 2 2 2h8c1.1028 0 2-.8975 2-2V5c0-1.1025-.8972-2-2-2zm.0002 6.9194l-6.1494-4.9194h6.1492l.0002 4.9194zm-.6011 2.0806l-7.3992 5.9194V6.0806l7.3992 5.9194zm.6013 2.0801l.0007 11.8403-7.4004-5.9204 7.3997-5.9199zm-8.0005 8.0005l6.1492 4.9194h-6.1492v-4.9194zM13 3H5c-1.1028 0-2 .8975-2 2V27c0 1.1025.8972 2 2 2H13c1.1028 0 2-.8975 2-2V5c0-1.1025-.8972-2-2-2zm.0002 6.9194L6.8508 5h6.1492l.0002 4.9194zm-.6011 2.0806l-7.3992 5.9194V6.0806l7.3992 5.9194zm.6013 2.0801l.0007 11.8403-7.4004-5.9204 7.3997-5.9199zM5 22.0806l6.1492 4.9194H5v-4.9194z"></path></svg>`;
export default svgResultCarbonIcon;
