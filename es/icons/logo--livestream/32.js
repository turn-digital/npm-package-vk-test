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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M22.49 23.71h-.76c-2.26 0-4.52 0-6.78 0a3.12 3.12 0 01-2.41-1A14.91 14.91 0 0110 18.88c-1.3-2.6-2.54-5.22-3.82-7.82-.39-.8-.82-1.56-1.28-2.32A7.84 7.84 0 002 5.6c1.24 0 2.41 0 3.57 0a45.63 45.63 0 017 .61 8.09 8.09 0 016.34 5.09 48.51 48.51 0 012.17 7.36A26 26 0 0022.49 23.71zM28.1 26.38a2.93 2.93 0 01-2.74-2.64 42.08 42.08 0 01-.14-4.9 48 48 0 00-.61-7.58 3.75 3.75 0 00-.83-2h2.65c.54 0 .73.37.89.78A12.1 12.1 0 0128 13.28c.29 2.72.31 5.45.33 8.18a10.94 10.94 0 000 1.15c.09.78.4 1.1 1.17 1.08.5 0 .5-.06.5-.06v2.69A8.62 8.62 0 0128.1 26.38z"></path></svg>`;
export default svgResultCarbonIcon;
