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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M30 10V2H22v8h3v4H23v2h7V14H27V10zM24 4h4V8H24zM20 23.41L18.59 22 16 24.59 13.41 22 12 23.41 14.59 26 12 28.59 13.41 30 16 27.41 18.59 30 20 28.59 17.41 26 20 23.41zM20 14L12 14 12 16 15 16 15 21 17 21 17 16 20 16 20 14zM7 9.86a4 4 0 10-2 0V14H2v2H9V14H7zM4 6A2 2 0 116 8 2 2 0 014 6z"></path></svg>`;
export default svgResultCarbonIcon;
