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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M28 26.59L5.41 4 4 5.41 14.59 16 7 23.59 8.41 25 15 18.41V29a1 1 0 00.58.91A1.06 1.06 0 0016 30a1 1 0 00.65-.24l6.3-5.4L26.59 28zm-11 .24V18.41l4.53 4.53zM17 12.75V5.17l4.53 3.89-4.11 4.11 1.41 1.41 4.88-4.87A1 1 0 0024 9a1 1 0 00-.35-.72l-7-6a1 1 0 00-1.07-.15A1 1 0 0015 3v7.75z"></path></svg>`;
export default svgResultCarbonIcon;
