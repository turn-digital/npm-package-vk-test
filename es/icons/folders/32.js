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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M26 28H6a2.0021 2.0021 0 01-2-2V11A2.0021 2.0021 0 016 9h5.6665a2.0119 2.0119 0 011.2007.4L16.3335 12H26a2.0021 2.0021 0 012 2V26A2.0021 2.0021 0 0126 28zM11.6665 11H5.9985L6 26H26V14H15.6665zM28 9H17.6665l-4-3H6V4h7.6665a2.0119 2.0119 0 011.2007.4L18.3335 7H28z"></path></svg>`;
export default svgResultCarbonIcon;
