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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M17,11H15a2,2,0,0,0-2,2v6a2,2,0,0,0,2,2h2a2,2,0,0,0,2-2V13A2,2,0,0,0,17,11Zm0,2v2H15V13Zm-2,6V17h2v2Z"></path></svg>`;
export default svgResultCarbonIcon;