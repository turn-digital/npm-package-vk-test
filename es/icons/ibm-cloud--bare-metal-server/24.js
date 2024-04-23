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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<circle cx="9" cy="26" r="1"></circle><path d="m26,30H6c-1.1041-.0012-1.9988-.8959-2-2v-4c.0012-1.1041.8959-1.9988,2-2h20c1.1041.0012,1.9988.8959,2,2v4c-.0012,1.1041-.8959,1.9988-2,2Zm-20-6v4h20v-4H6Z"></path><circle cx="9" cy="16" r="1"></circle><path d="m26,20H6c-1.1041-.0012-1.9988-.8959-2-2v-4c.0012-1.1041.8959-1.9988,2-2h20c1.1041.0012,1.9988.8959,2,2v4c-.0012,1.1041-.8959,1.9988-2,2ZM6,14v4h20v-4H6Z"></path><circle cx="9" cy="6" r="1"></circle><path d="m26,10H6c-1.1041-.0012-1.9988-.8959-2-2v-4c.0012-1.1041.8959-1.9988,2-2h20c1.1041.0012,1.9988.8959,2,2v4c-.0012,1.1041-.8959,1.9988-2,2ZM6,4v4h20v-4H6Z"></path></svg>`;
export default svgResultCarbonIcon;
