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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M24,10h4c1.1046,0,2-.8954,2-2V4c0-1.1046-.8954-2-2-2h-4c-1.1046,0-2,.8954-2,2v1h-3c-1.1046,0-2,.8954-2,2V15h-3V5c0-1.1046-.8954-2-2-2H4c-1.1046,0-2,.8954-2,2V27c0,1.1046,.8954,2,2,2H12c1.1046,0,2-.8954,2-2v-10h3v8c0,1.1046,.8954,2,2,2h3v1c0,1.1046,.8954,2,2,2h4c1.1046,0,2-.8954,2-2v-4c0-1.1046-.8954-2-2-2h-4c-1.1046,0-2,.8954-2,2v1h-3v-8h3v1c0,1.1046,.8954,2,2,2h4c1.1046,0,2-.8954,2-2v-4c0-1.1046-.8954-2-2-2h-4c-1.1046,0-2,.8954-2,2v1h-3V7h3v1c0,1.1046,.8954,2,2,2Zm0-6h4v4s-4,0-4,0V4ZM11.3992,12l-7.3992,5.9194V6.0806l7.3992,5.9194Zm.6013,2.0801l.0007,11.8403-7.4004-5.9204,7.3997-5.9199Zm-.0002-4.1606L5.8508,5h6.1492l.0002,4.9194ZM4,22.0806l6.1492,4.9194H4v-4.9194Zm20,1.9194h4v4h-4v-4Zm0-10h4v4h-4v-4Z"></path></svg>`;
export default svgResultCarbonIcon;
