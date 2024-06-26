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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M18 19H24V21H18zM18 15H30V17H18zM18 11H30V13H18zM14 21V19H9V17H7v2H2v2h8.2148a8.5914 8.5914 0 01-2.2159 3.9771A9.2731 9.2731 0 016.5521 23H4.3334a10.8553 10.8553 0 002.1451 3.2966A14.6584 14.6584 0 013 28.127L3.7021 30a16.42 16.42 0 004.2907-2.3362A16.4883 16.4883 0 0012.2979 30L13 28.127A14.664 14.664 0 019.5228 26.3 10.3132 10.3132 0 0012.2516 21zM11.1666 13H13.333L8.75 2H6.5832L2 13H4.1664L5 11h5.3335zM5.8331 9L7.6665 4.6 9.5 9z"></path></svg>`;
export default svgResultCarbonIcon;
