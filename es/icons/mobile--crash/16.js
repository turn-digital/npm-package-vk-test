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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M30 20L26 16 24.5859 17.4141 27.1714 20 24.1714 23 27.1714 26 24.5859 28.5859 26 30 30 26 27 23 30 20zM23 20L19 16 17.5859 17.4141 20.1714 20 17.1714 23 20.1714 26 17.5859 28.5859 19 30 23 26 20 23 23 20z"></path><path d="m15,28h-6V8h14v6h2V4c0-1.103-.8975-2-2-2h-14c-1.103,0-2,.897-2,2v24c0,1.1025.897,2,2,2h6v-2ZM9,4h14v2h-14v-2Z"></path></svg>`;
export default svgResultCarbonIcon;
