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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="m30,28c0-2.9668-2.167-5.4312-5-5.9097v-1.0903h1v-2h-4v2h1v1.0903c-2.833.4785-5,2.9429-5,5.9097h-1v2h14v-2h-1Zm-10,0c0-2.2056,1.7944-4,4-4s4,1.7944,4,4h-8Z"></path><path d="m14,28h-5V8h14v8h2V4c0-1.103-.8975-2-2-2h-14c-1.103,0-2,.897-2,2v24c0,1.1025.897,2,2,2h5v-2ZM9,4h14v2h-14v-2Z"></path></svg>`;
export default svgResultCarbonIcon;
