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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M4 4V6H8v8a8 8 0 0016 0V6h4V4zM22 14a6 6 0 01-12 0V6h5v8h2V6h5zM11 26H13V28H11zM7 24H9V26H7zM15 24H17V26H15zM19 26H21V28H19zM23 24H25V26H23z"></path></svg>`;
export default svgResultCarbonIcon;
