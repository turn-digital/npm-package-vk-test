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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M27.85 29H30L24 14H21.65l-6 15H17.8l1.6-4h6.85zM20.2 23l2.62-6.56L25.45 23zM18 7V5H11V2H9V5H2V7H12.74a14.71 14.71 0 01-3.19 6.18A13.5 13.5 0 017.26 9H5.16a16.47 16.47 0 003 5.58A16.84 16.84 0 013 18l.75 1.86A18.47 18.47 0 009.53 16a16.92 16.92 0 005.76 3.84L16 18a14.48 14.48 0 01-5.12-3.37A17.64 17.64 0 0014.8 7z"></path></svg>`;
export default svgResultCarbonIcon;
