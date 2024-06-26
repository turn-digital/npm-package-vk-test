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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M28 2H20a2.0023 2.0023 0 00-2 2V28a2.0023 2.0023 0 002 2h8a2.0023 2.0023 0 002-2V4A2.0023 2.0023 0 0028 2zm0 2v7H20V4zm0 9v6H20V13zM20 28V21h8v7zM12 15L10 15 10 13 8 13 8 15 6 15 6 17 8 17 8 19 10 19 10 17 12 17 12 15z"></path><path d="M16,6V4H10A2.0023,2.0023,0,0,0,8,6V9.08A6.99,6.99,0,0,0,8,22.92V26a2.0023,2.0023,0,0,0,2,2h6V26H10V22.92A6.99,6.99,0,0,0,10,9.08V6ZM14,16a5,5,0,1,1-5-5A5.0059,5.0059,0,0,1,14,16Z"></path></svg>`;
export default svgResultCarbonIcon;
