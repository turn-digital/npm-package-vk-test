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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M31.5 23c-.8271 0-1.5-.6729-1.5-1.5v-1.5c0-1.1025-.8972-2-2-2h-2v2h2v1.5c0 .98.4072 1.8643 1.0581 2.5-.6509.6357-1.0581 1.52-1.0581 2.5v1.5h-2v2h2c1.1028 0 2-.8975 2-2v-1.5c0-.8271.6729-1.5 1.5-1.5h.5v-2h-.5zM16 20v1.5c0 .8271-.6729 1.5-1.5 1.5h-.5v2h.5c.8271 0 1.5.6729 1.5 1.5v1.5c0 1.1025.8972 2 2 2h2v-2h-2v-1.5c0-.98-.4072-1.8643-1.0581-2.5.6509-.6357 1.0581-1.52 1.0581-2.5v-1.5h2v-2h-2c-1.1028 0-2 .8975-2 2zM28 15h2V5c0-1.103-.8975-2-2-2h-3v2h3v10z"></path><circle cx="23" cy="13" r="2"></circle><circle cx="16" cy="13" r="2"></circle><circle cx="9" cy="13" r="2"></circle><path d="m7,23h-3c-1.103,0-2-.8975-2-2V5c0-1.103.897-2,2-2h3v2h-3v16h3v2Z"></path></svg>`;
export default svgResultCarbonIcon;
