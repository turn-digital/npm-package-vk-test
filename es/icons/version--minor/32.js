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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M18.5859 15.4141L16 12.8345 16 12.8345 13.4125 15.4156 12 14 16 10 20 14 18.5859 15.4141zM18.5859 21.4141L16 18.8345 16 18.8345 13.4125 21.4156 12 20 16 16 20 20 18.5859 21.4141z"></path><path d="m1.5858,17.4142c-.3905-.3905-.5858-.9024-.5858-1.4142s.1953-1.0237.5858-1.4142L14.5858,1.5858c.3905-.3905.9023-.5858,1.4142-.5858s1.0237.1953,1.4142.5858l13,13c.3905.3905.5858.9024.5858,1.4142s-.1953,1.0237-.5858,1.4142l-13,13c-.3905.3905-.9024.5858-1.4142.5858s-1.0237-.1953-1.4142-.5858L1.5858,17.4142ZM16,3L3,16l13,13,13-13L16,3Z"></path></svg>`;
export default svgResultCarbonIcon;
