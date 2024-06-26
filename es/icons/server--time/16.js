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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M28,30H4a2.0021,2.0021,0,0,1-2-2V22a2.0021,2.0021,0,0,1,2-2H28a2.0021,2.0021,0,0,1,2,2v6A2.0021,2.0021,0,0,1,28,30ZM4,22v6H28V22Z"></path><circle cx="7" cy="25" r="1"></circle><path d="M19 11.586L17 9.586 17 6 15 6 15 10.414 17.586 13 19 11.586z"></path><path d="M16,18a8,8,0,1,1,8-8A8.0092,8.0092,0,0,1,16,18ZM16,4a6,6,0,1,0,6,6A6.0067,6.0067,0,0,0,16,4Z"></path></svg>`;
export default svgResultCarbonIcon;
