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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M25,18l-1.4141,1.4141L26.1672,22H18a4,4,0,0,0,0,8h2V28H18a2,2,0,0,1,0-4h8.1672l-2.5827,2.5874L25,28l5-5Z"></path><path d="M10,22H4L3.9966,6.9064l11.4341,7.9159a1.0008,1.0008,0,0,0,1.1386,0L28,6.9086,28,16h2V6a2.0025,2.0025,0,0,0-2-2H4A2,2,0,0,0,2,5.9965V22a2.0026,2.0026,0,0,0,2,2h6ZM25.7986,6,16,12.7837,6.2014,6Z"></path></svg>`;
export default svgResultCarbonIcon;
