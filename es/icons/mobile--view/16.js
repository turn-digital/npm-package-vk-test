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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<circle cx="23" cy="24" r="2"></circle><path d="m30.7769,23.4785c-1.4229-3.3287-4.4761-5.4785-7.7769-5.4785s-6.3538,2.1499-7.7769,5.4785l-.2231.5215.2231.5215c1.4231,3.3287,4.4761,5.4785,7.7769,5.4785s6.354-2.1499,7.7769-5.4785l.2231-.5215-.2231-.5215Zm-7.7769,4.5215c-2.2056,0-4-1.7944-4-4s1.7944-4,4-4,4,1.7944,4,4-1.7944,4-4,4Z"></path><path d="m14,28h-5V8h14v7h2V4c0-1.103-.8975-2-2-2h-14c-1.103,0-2,.897-2,2v24c0,1.1025.897,2,2,2h5v-2ZM9,4h14v2h-14v-2Z"></path></svg>`;
export default svgResultCarbonIcon;
