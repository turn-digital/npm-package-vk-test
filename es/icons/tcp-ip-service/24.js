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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M16 28H30V30H16zM27 26h-8c-1.1028 0-2-.8972-2-2v-5c0-1.1028.8972-2 2-2h8c1.1028 0 2 .8972 2 2v5c0 1.1028-.8972 2-2 2zm-8-7v5h8v-5h-8zM15 23h-5c-1.1028 0-2-.8972-2-2v-4h2v4h5v2zM2 13H16V15H2zM13 11H5c-1.1028 0-2-.8972-2-2V4c0-1.1028.8972-2 2-2H13c1.1028 0 2 .8972 2 2v5c0 1.1028-.8972 2-2 2zM5 4v5H13V4H5z"></path></svg>`;
export default svgResultCarbonIcon;
