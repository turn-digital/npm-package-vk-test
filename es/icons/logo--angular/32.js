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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M13.5,16h4.9L16,10.8L13.5,16z"></path><path d="M16,3L3,7.6l2.7,15.8L16,29l10.3-5.6L29,7.6L16,3z M21.1,21.6l-1.5-3.2h-7.1l-1.5,3.2H8.6L16,5.3l7.4,16.2H21.1z"></path></svg>`;
export default svgResultCarbonIcon;
