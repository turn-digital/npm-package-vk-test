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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M28 9H22v2h6v4H24v2h4v4H22v2h6a2.0027 2.0027 0 002-2V11A2.0023 2.0023 0 0028 9zM20 23H12V17a2.002 2.002 0 012-2h4V11H12V9h6a2.0023 2.0023 0 012 2v4a2.0023 2.0023 0 01-2 2H14v4h6zM2.5 22.5L2.5 21.5 5.5 21.5 5.5 10.5 2.5 10.5 2.5 9.5 6.5 9.5 6.5 21.5 9.5 21.5 9.5 22.5 2.5 22.5z"></path><path d="M6,10V22H6V10M7,9H2v2H5V21H2v2h8V21H7V9Z"></path></svg>`;
export default svgResultCarbonIcon;
