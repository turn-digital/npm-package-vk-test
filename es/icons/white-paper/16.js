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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M22 27.1798L19.41 24.5899 18 26 22 30 30 22 28.5899 20.59 22 27.1798zM9 17H16V19H9zM9 12H21V14H9zM9 7H21V9H9z"></path><path d="m16,30H6c-1.103,0-2-.8972-2-2V4c0-1.1028.897-2,2-2h18c1.103,0,2,.8972,2,2v15h-2V4H6v24h10v2Z"></path></svg>`;
export default svgResultCarbonIcon;
