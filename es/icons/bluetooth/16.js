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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M16,30a1.06,1.06,0,0,1-.42-.09A1,1,0,0,1,15,29V18.41L8.41,25,7,23.59,14.59,16,7,8.41,8.41,7,15,13.59V3a1,1,0,0,1,.58-.91,1,1,0,0,1,1.07.15l7,6A1,1,0,0,1,24,9a1,1,0,0,1-.29.75L17.41,16l6.3,6.29A1,1,0,0,1,24,23a1,1,0,0,1-.35.72l-7,6A1,1,0,0,1,16,30Zm1-11.59v8.42l4.53-3.89ZM17,5.17v8.42l4.53-4.53Z"></path></svg>`;
export default svgResultCarbonIcon;
