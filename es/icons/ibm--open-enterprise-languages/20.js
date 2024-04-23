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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M23.586 21.414L27.166 25 27.166 25 23.584 28.587 25 30 30 25 25 20zM20.414 21.414L16.834 25 16.834 25 20.416 28.587 19 30 14 25 19 20zM22 6H24V14H22zM18 6H20V14H18zM14 14h-2c-1.103 0-2-.897-2-2V8c0-1.103.897-2 2-2h2c1.103 0 2 .897 2 2v4C16 13.103 15.103 14 14 14zM12 8v4h2V8H12zM6 6H8V14H6z"></path><path d="M10,28H4c-1.103,0-2-0.897-2-2V4c0-1.103,0.897-2,2-2h22c1.103,0,2,0.897,2,2v12h-2V4H4v22h6V28z"></path></svg>`;
export default svgResultCarbonIcon;
