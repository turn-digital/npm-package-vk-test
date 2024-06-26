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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<switch ><g ><path d="M30 28.6l-2.8-2.8C27.7 25 28 24 28 23c0-2.8-2.2-5-5-5s-5 2.2-5 5 2.2 5 5 5c1 0 2-.3 2.8-.8l2.8 2.8L30 28.6zM20 23c0-1.7 1.3-3 3-3s3 1.3 3 3-1.3 3-3 3S20 24.7 20 23zM8 16H18V18H8zM8 10H20V12H8z"></path><path d="M14,27.7l-5.2-2.8C5.8,23.4,4,20.3,4,17V4h20v11h2V4c0-1.1-0.9-2-2-2H4C2.9,2,2,2.9,2,4v13c0,4.1,2.2,7.8,5.8,9.7L14,30 V27.7z"></path></g></switch></svg>`;
export default svgResultCarbonIcon;
