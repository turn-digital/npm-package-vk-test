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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M24 30v-4.1c2.3-.5 4-2.5 4-4.9 0-2.4-1.7-4.4-4-4.9V2s-2 0-2 0v14.1c-2.3.5-4 2.5-4 4.9 0 2.4 1.7 4.4 4 4.9v4.1s2 0 2 0zm-4-9c0-1.7 1.3-3 3-3s3 1.3 3 3c0 1.7-1.3 3-3 3s-3-1.3-3-3zM8 2v4.1c-2.3.5-4 2.5-4 4.9 0 2.4 1.7 4.4 4 4.9v14.1s2 0 2 0v-14.1c2.3-.5 4-2.5 4-4.9 0-2.4-1.7-4.4-4-4.9V2s-2 0-2 0zm4 9c0 1.7-1.3 3-3 3s-3-1.3-3-3 1.3-3 3-3 3 1.3 3 3z"></path></svg>`;
export default svgResultCarbonIcon;
