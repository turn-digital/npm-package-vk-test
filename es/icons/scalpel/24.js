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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M28.83,5.17a4.1,4.1,0,0,0-5.66,0L.34,28H9.59a5,5,0,0,0,3.53-1.46L28.83,10.83a4,4,0,0,0,0-5.66ZM12.29,18.88l2.09-2.09,2.83,2.83-2.09,2.09Zm-.58,6.24A3,3,0,0,1,9.59,26H5.17l5.71-5.71,2.83,2.83ZM27.41,9.41l-8.79,8.8-2.83-2.83,8.8-8.79a2,2,0,0,1,2.82,0,2,2,0,0,1,0,2.82Z"></path></svg>`;
export default svgResultCarbonIcon;
