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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path stroke-width="0" d="M15 19l-1.4141 1.4141 3.5859 3.5859H4v-13h-2v13c0 1.1046.8954 2 2 2h13.1719l-3.5859 3.5859 1.4141 1.4141 6-6-6-6zM24 18v-2h2V4h-2v-2h6v2h-2v12h2v2h-6z"></path><path stroke-width="0" d="m21,18h2l-5.5-16-3,.0088-5.5,15.9912h2l1.3333-4h7.3335l1.3333,4Zm-8-6l3-9,3,9h-6Z"></path></svg>`;
export default svgResultCarbonIcon;
