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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M24.9,3.9L16,19.4L7.1,3.9H2l14,24.3L30,3.9H24.9z"></path><path d="M16,9.5l-3.2-5.6H8.1L16,17.5l7.9-13.6h-4.6L16,9.5z"></path></svg>`;
export default svgResultCarbonIcon;
