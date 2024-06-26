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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M28,12a2,2,0,0,0,2-2V4a2,2,0,0,0-2-2H4A2,2,0,0,0,2,4v6a2,2,0,0,0,2,2H15v4H9a2,2,0,0,0-2,2v4H4a2,2,0,0,0-2,2v4a2,2,0,0,0,2,2h8a2,2,0,0,0,2-2V24a2,2,0,0,0-2-2H9V18H23v4H20a2,2,0,0,0-2,2v4a2,2,0,0,0,2,2h8a2,2,0,0,0,2-2V24a2,2,0,0,0-2-2H25V18a2,2,0,0,0-2-2H17V12ZM12,28H4V24h8Zm16,0H20V24h8ZM4,4H28v6H4Z"></path></svg>`;
export default svgResultCarbonIcon;
