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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 20 20">${children}<path d="M10,1c-4.9,0-9,4.1-9,9s4.1,9,9,9s9-4,9-9S15,1,10,1z M13.5,14.5L10,11l-3.5,3.5l-1-1L9,10L5.5,6.5l1-1L10,9l3.5-3.5l1,1	L11,10l3.5,3.5L13.5,14.5z"></path><path fill="none" d="M13.5,14.5L10,11l-3.5,3.5l-1-1L9,10L5.5,6.5l1-1L10,9l3.5-3.5l1,1L11,10l3.5,3.5L13.5,14.5z" data-icon-path="inner-path" opacity="0"></path></svg>`;
export default svgResultCarbonIcon;
