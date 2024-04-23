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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<switch ><g ><path d="M16 22v-6h-6v-6H2v20h20v-8h-6zm-2-4v4h-4v-4h4zM4 12h4v4H4v-4zm4 6v4H4v-4h4zM4 28v-4h4v4H4zm10 0h-4v-4h4v4zm6 0h-4v-4h4v4zM29.6 13.6 27 16.2V10h3V2h-8v8h3v6.2l-2.6-2.6L21 15l5 5 5-5-1.4-1.4zM24 4h4v4h-4V4z"></path><path fill="none" d="M0 0h32v32H0z"></path></g></switch></svg>`;
export default svgResultCarbonIcon;
