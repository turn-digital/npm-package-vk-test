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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M24,17H18a1.0008,1.0008,0,0,1-1-1V4a2.0025,2.0025,0,0,0-2-2H5A2.0025,2.0025,0,0,0,3,4V28a2.0025,2.0025,0,0,0,2,2H27a2.0025,2.0025,0,0,0,2-2V22A5.0057,5.0057,0,0,0,24,17Zm3,5v2H23V19h1A3.0033,3.0033,0,0,1,27,22ZM15,4V6H11V8h4v2H11v2h4v2H11v2h4a3.0033,3.0033,0,0,0,3,3h3v5H14.1624l-3-1H5V4ZM25,28V27H23v1H21V27H19v1H17V27H15v1H13V27H11v1H5V25h5.8376l3,1H27v2Z"></path></svg>`;
export default svgResultCarbonIcon;
