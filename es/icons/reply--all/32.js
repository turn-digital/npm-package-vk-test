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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M19,29a.9989.9989,0,0,1-.768-.36l-10-12a1,1,0,0,1,0-1.28l10-12A1,1,0,0,1,20,4v7.0325c7.0074.4629,11,5.86,11,14.9677a1,1,0,0,1-1.8.6c-2.8218-3.7623-5.3912-5.3463-9.2-5.5716V28a1,1,0,0,1-1,1ZM10.3016,16,18,25.238V20a1,1,0,0,1,1-1,12.7127,12.7127,0,0,1,9.8414,4.0909C28.0864,16.5553,24.6587,13,19,13a1,1,0,0,1-1-1V6.7618Z"></path><path d="M11.4639,28.9182,1.2318,16.64a1,1,0,0,1,0-1.28L11.4638,3.0792,13,4.36,3.3016,16,13,27.638Z"></path></svg>`;
export default svgResultCarbonIcon;
