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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M30 16c0 3.7-.6 6.7-1.4 6.7-.8 0-1.4-3-1.4-6.7s.6-6.7 1.4-6.7C29.4 9.3 30 12.3 30 16M26.5 16c0 4.1-1.8 7.5-3.9 7.5s-3.9-3.4-3.9-7.5 1.8-7.5 3.9-7.5S26.5 11.9 26.5 16M17.8 16c0 4.4-3.5 8-7.9 8S2 20.4 2 16s3.5-8 7.9-8S17.8 11.6 17.8 16"></path></svg>`;
export default svgResultCarbonIcon;
