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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M26.74 19.56l-2.52-1a2 2 0 00-2.15.44L20 21.06a9.93 9.93 0 01-5.35-2.29L30 3.41 28.59 2 2 28.59 3.41 30l7.93-7.92c3.24 3.12 7.89 5.5 14.55 5.92A2 2 0 0028 26V21.41A2 2 0 0026.74 19.56zM8.15 18.19l3.52-3.52A11.68 11.68 0 0110.85 12l2.07-2.07a2 2 0 00.44-2.15l-1-2.52A2 2 0 0010.5 4H6A2 2 0 004 6.22 29 29 0 008.15 18.19z"></path></svg>`;
export default svgResultCarbonIcon;
