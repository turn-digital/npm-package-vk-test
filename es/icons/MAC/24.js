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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path stroke-width="0" d="M30 23h-6c-1.103 0-2-.8975-2-2v-10c0-1.103.897-2 2-2h6v2h-6v10h6v2zM18 9h-4c-1.103 0-2 .897-2 2v12h2v-5h4v5h2v-12c0-1.103-.897-2-2-2zm-4 7v-5h4v5h-4zM8 9L6.4849 14 6 15.977 5.535 14 4 9 2 9 2 23 4 23 4 15 3.8415 13.0039 4.4212 15 6 19.6263 7.5788 15 8.1588 13 8 15 8 23 10 23 10 9 8 9z"></path></svg>`;
export default svgResultCarbonIcon;
