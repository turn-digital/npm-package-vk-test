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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M27 20.415L25.586 19 23 21.587 20.414 19 19 20.415 21.586 23 19 25.586 20.414 27 23 24.414 25.586 27 27 25.586 24.414 23 27 20.415zM24 4a4.0045 4.0045 0 00-4 4 3.951 3.951 0 00.5669 2.019L10.019 20.5669A3.9521 3.9521 0 008 20a4 4 0 104 4 3.951 3.951 0 00-.5669-2.019L21.981 11.4331A3.9521 3.9521 0 0024 12a4 4 0 000-8zM8 26a2 2 0 112-2A2.0023 2.0023 0 018 26zM24 10a2 2 0 112-2A2.0023 2.0023 0 0124 10zM8 11.18L5.41 8.59 4 10 8 14 15 7 13.59 5.59 8 11.18z"></path></svg>`;
export default svgResultCarbonIcon;
